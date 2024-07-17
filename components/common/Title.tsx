interface IProps {
  title: string
}

export const Title = ({ title }: IProps) => {
  return (
    <div className="w-fit mx-auto">
      <h1 className="font-ls text-4xl font-bold text-center">{title}</h1>
      <div className="h-1 w-2/3 bg-brand-primary mx-auto my-4 rounded-full"></div>
    </div>
  )
}
