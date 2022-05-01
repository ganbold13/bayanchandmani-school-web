function VideoBG() {
  return (
    <div className="banner">
      <video autoPlay muted loop className="w-full">
        <source src="./bg.mp4" />
      </video>
    </div>
  )
}

export default VideoBG
