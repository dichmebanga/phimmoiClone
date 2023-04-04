import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

function SkeletonUi() {
    return (
        <div
            style={{
                border: '1px solid #ccc',
                display: 'block',
                lineHeight: 2,
                padding: '1rem',
                marginBottom: '0.5rem',
                width: 100,
            }}
        >
            <SkeletonTheme baseColor="#ffffff" highlightColor="#fff">
                <Skeleton baseColor="#ccc" height={50} />
                <Skeleton height={100} />
                <Skeleton height={150} />
            </SkeletonTheme>
        </div>
    );
}

export default SkeletonUi;
