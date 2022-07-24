type PropType = {
  message: string;
}

export const MyLabel = ({ message }: PropType) => {
  return <p>{ message }</p>
}