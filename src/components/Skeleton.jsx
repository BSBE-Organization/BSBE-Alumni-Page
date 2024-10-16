import '../styles/alumcard.css'
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
function SkeletonCard(){
    return(
        <>
            <div className="dircard skeleton">
              <SkeletonTheme baseColor="#E4FFF2" highlightColor="#afffd8">
                <p><Skeleton className='in-skeleton' count={6} style={{width:'100%'}}/></p>
              </SkeletonTheme>
            </div>
        </>
    )
}
export default SkeletonCard;