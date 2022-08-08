const Button = () => {

  return (
    <div>
      <button
        onClick={() => {
          console.log('clicked')
        }}
      >Submit</button>
    </div>
  )
}

export default Button;