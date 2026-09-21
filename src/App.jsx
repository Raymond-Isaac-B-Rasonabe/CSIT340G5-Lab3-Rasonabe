const Header = (props) => {
  return <h1>{props.course}</h1>
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part1} {props.units1}</p>
      <p>{props.part2} {props.units2}</p>
      <p>{props.part3} {props.units3}</p>
      <p>{props.footer}</p>
    </div>
  )
}

const App = () => {
  const course = 'CSIT340: Industry Elective One'
  const part1 = 'Information Managenent'
  const units1 = 3
  const part2 = 'Rizal031'
  const units2 = 1
  const part3 = 'Data Analytics'
  const units3 = 3
  const footer = 'Raymond Isaac B. Rasonabe - CSIT340 - G5'

  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1} units1={units1}
        part2={part2} units2={units2}
        part3={part3} units3={units3}
        footer={footer}
      />
    </div>
  )
}

export default App