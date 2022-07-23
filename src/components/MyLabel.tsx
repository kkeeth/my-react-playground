type PropType = {
  message: string;
}

export const MyLabel = ({ message }: PropType) => {
  console.log(message);

  return <p>{ message }</p>
}