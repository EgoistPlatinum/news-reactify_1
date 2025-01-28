import Skeleton from "../../components/Skeleton/Skeleton.jsx";

export function withSkeleton(Component, type, count) {
  return function WithSkeleton(props) {
    const {isLoading, ...restProps} = props

    if (isLoading) {
      return <Skeleton count={count} type={type}/>
    }

    return <Component {...restProps} />
  }
}