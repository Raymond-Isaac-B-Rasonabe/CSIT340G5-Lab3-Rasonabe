const App = () => {
  const course = 'CSIT340: Industry Elective 1'
  const part1 = {
    name: 'Data Analytics 1',
    exercises: 3
  }
  const part2 = {
    name: 'Project Management for IT',
    exercises: 3
  }
  const part3 = {
    name: 'Information Management 2',
    exercises: 3
  }
  const footer = {
    name: 'Raymond Isaac B. Rasonabe - CSIT340 - G5'
  }
  
  return (
    <div>
      <Header course={course} />
      <Content
        part1={part1}
        part2={part2}
        part3={part3}
        footer={footer}
      />
    </div>
  )
}

export default App