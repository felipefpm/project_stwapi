import Skeleton from '@mui/material/Skeleton'
import { Container, SkeletonContainer } from './styles'

export function SkeletonCardCharacters() {

  return (
    <>
    <Container>
      <Skeleton variant="circular" width={84} height={84} style={{marginBottom: 26}} />
      <Skeleton variant="rounded" width={129} height={32} />
      <div>
      <Skeleton variant="rounded" width={129} height={23} />
      </div>
    </Container>
    <Container>
      <Skeleton variant="circular" width={84} height={84} style={{marginBottom: 26}} />
      <Skeleton variant="rounded" width={129} height={32} />
      <div>
        <Skeleton variant="rounded" width={129} height={23} />
      </div>
    </Container>
    <Container>
      <Skeleton variant="circular" width={84} height={84} style={{marginBottom: 26}} />
      <Skeleton variant="rounded" width={129} height={32} />
      <div>
        <Skeleton variant="rounded" width={129} height={23} />
      </div>
    </Container>
    <Container>
      <Skeleton variant="circular" width={84} height={84} style={{marginBottom: 26}} />
      <Skeleton variant="rounded" width={129} height={32} />
      <div>
        <Skeleton variant="rounded" width={129} height={23} />
      </div>
    </Container>
    </>
  )
}