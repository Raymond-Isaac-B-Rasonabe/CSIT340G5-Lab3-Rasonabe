const App = () => {
  const course = 'CSIT340: Industry Elective One'
  const part1 = 'Information Managenent'
  const exercises1 = 3
  const part2 = 'Rizal031'
  const exercises2 = 1
  const part3 = 'Data Analytics'
  const exercises3 = 3
  const footer = 'Raymond Isaac B. Rasonabe - CSIT340 - G5'

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of Units {exercises1 + exercises2 + exercises3}</p>
      <footer>{footer}</footer>
    </div>
  )
}

export default App