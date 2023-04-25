import Skeleton from '@mui/material/Skeleton'
import { SkeletonContainer } from './styles'

export function SkeletonCardFilm() {

  return (
    <>
      <SkeletonContainer>
        <Skeleton variant="rounded" width={311} height={180} style={{ marginBottom: 15 }} />
        <div className='skeleton-content'>
          <Skeleton variant="rounded" width={192} height={29} style={{ marginBottom: 11 }} />
          <Skeleton variant="rounded" width={281} height={26} style={{ marginBottom: 65 }} />
          <Skeleton variant="rounded" width={131} height={24} style={{ marginBottom: 15 }} />
        </div>
      </SkeletonContainer>
      <SkeletonContainer>
        <Skeleton variant="rounded" width={311} height={180} style={{ marginBottom: 15 }} />
        <div className='skeleton-content'>
          <Skeleton variant="rounded" width={192} height={29} style={{ marginBottom: 11 }} />
          <Skeleton variant="rounded" width={281} height={26} style={{ marginBottom: 65 }} />
          <Skeleton variant="rounded" width={131} height={24} style={{ marginBottom: 15 }} />
        </div>
      </SkeletonContainer>
      <SkeletonContainer>
        <Skeleton variant="rounded" width={311} height={180} style={{ marginBottom: 15 }} />
        <div className='skeleton-content'>
          <Skeleton variant="rounded" width={192} height={29} style={{ marginBottom: 11 }} />
          <Skeleton variant="rounded" width={281} height={26} style={{ marginBottom: 65 }} />
          <Skeleton variant="rounded" width={131} height={24} style={{ marginBottom: 15 }} />
        </div>
      </SkeletonContainer>
    </>
  )
}