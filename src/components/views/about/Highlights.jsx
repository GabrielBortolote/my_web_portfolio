export default function Highlights({dict}) {
  return <div className="
    flex flex-row flex-wrap xs:flex-nowrap
    justify-center sm:justify-start
  ">
    <Col>
      <Item>
        <Title>
          {dict.xp.toUpperCase()}
        </Title>
        <Content className="text-8xl xs:text-6xl sm:text-8xl">
          {"6+"}
        </Content>
      </Item>
      <Item>
        <Title>
          {dict.projects.toUpperCase()}
        </Title>
        <Content className="text-8xl xs:text-6xl sm:text-8xl">
          {"20+"}
        </Content>
      </Item> 
    </Col>
    <Col dict={dict} className="pb-12 md:pb-24">
      <Item>
        <Title>
          {dict.englishLevelTitle.toUpperCase()}
        </Title>
        <Content className="text-5xl xs:text-4xl sm:text-5xl">
          {dict.englishLevelValue.toUpperCase()}
        </Content>
      </Item> 
      <Item>
        <Title>
          {dict.degreeTitle.toUpperCase()}
        </Title>
        <Content className="text-4xl xs:text-2xl sm:text-4xl">
          {dict.degreeValue[0].toUpperCase()} <br/>
            {dict.degreeValue[1].toUpperCase()}
        </Content>
      </Item>
    </Col>
  </div>
}

function Col({children}) {
  return <div className={`flex flex-col justify-between pr-0 xs:first:pr-12`}>
    {children}
  </div>
}

function Item({children}) {
  return <div className="
    font-bold
    h-2/4
    pb-16
    text-center xs:text-left
  ">
    {children}
  </div>
}

function Title({children, className}){
  return <span className={`text-3xl xs:text-lg sm:text-2xl tracking-widest ${className}`}>   
    {children}
  </span>
}

function Content({children, className}){
  return <div className={`text-softYellow pt-4 ${className}`}>
    {children}
  </div>
}
