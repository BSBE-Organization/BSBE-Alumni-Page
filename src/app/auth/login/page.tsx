import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Icons } from "@/components/icons"
import { getProviders, signIn } from 'next-auth/react'
import {useRouter} from 'next/navigation'
import { GetServerSideProps } from 'next'


const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(8, { message: "Password must be at least 8 characters long" }),
})

type SignInData = z.infer<typeof signInSchema>

export default function SignInPage({providers}) {
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const { register, handleSubmit, formState: { errors } } = useForm<SignInData>({
    resolver: zodResolver(signInSchema)
  })

  const onSubmit = async (data: SignInData) => {
    setIsLoading(true)
    setError(null)

    try {
        const result = await signIn('credentials', {
            redirect: false,
            identifier: data.email,
            password: data.password,
        });

        if (result?.error) {
            if (result.error === 'CredentialsSignin') {
                toast({
                title: 'Login Failed',
                description: 'Incorrect username or password',
                variant: 'destructive',
                });
            } else {
                toast({
                title: 'Error',
                description: result.error,
                variant: 'destructive',
                });
            }
        }

        if (result?.url) {
            router.replace('/dashboard');
        }
    } catch (err) {
      setError('Failed to sign in. Please check your credentials and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md space-y-8 rounded-lg bg-white p-6 shadow-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="mt-2 text-sm text-gray-600">Enter your credentials to access your account</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                {...register('email')}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600" role="alert">{errors.email.message}</p>
              )}
            </div>

            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                {...register('password')}
                aria-invalid={errors.password ? "true" : "false"}
              />
              {errors.password && (
                <p className="mt-1 text-sm text-red-600" role="alert">{errors.password.message}</p>
              )}
            </div>
          </div>

          {error && (
            <Alert variant="destructive">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
            Sign In
          </Button>
        </form>
      </div>

      {/* OAuth Providers */}
      {Object.values(providers).map((provider: any) => {
        if (provider.name === "Credentials") {
          return null; // Skip rendering CredentialsProvider as it's handled above
        }
        return (
          <div key={provider.name} style={{ marginBottom: "1rem" }}>
            <button
              onClick={() => signIn(provider.id)}
              style={{ width: "100%", padding: "0.5rem" }}
            >
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}

    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const providers = await getProviders();
    return {
      props: { providers },
    };
};