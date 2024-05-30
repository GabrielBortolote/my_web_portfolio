export default function AboutView(){
  return <div className={`
    p-48
    w-full
    bg-dark
    text-light
    flex
    flex-row
  `}>
    <AboutCol />
    <DetailsCol />
  </div>
}

function Col({children, className}){
  return <div className={`flex ${className}`}
  style={{
    flex: '1 1 50%',
  }}>
    {children}
  </div>
}

function AboutCol(){
  return <Col className="flex-row justify-end pr-12">
    <PersonalInfoList personalInfo={[
      {title: 'name', data: 'Gabriel Bortolote'},
      {title: 'age', data: '26'},
      {title: 'role', data: 'Full Stack Engineer'},
      {title: 'email', data: 'gbortolote@gmail.com'},
      {title: 'phone', data: '+55 18 99607-6736'},
      {title: 'location', data: 'Brazil'},
      {title: 'hobbies', data: 'Code, Coffee Shop, Gym'},
      {
        title: 'linkedin',
        data: 'GabrielBortolote',
        link: 'https://www.linkedin.com/in/gabriel-bortolote/'
      },
    ]}/>
  </Col>
}

function DetailsCol(){
  return <Col>
    <div>Details Col</div>
  </Col>
}

function PersonalInfoList({personalInfo}){
  return <div class="w-[80%] bg-softYellow px-12 py-4 rounded text-dark relative">
    {personalInfo.map((item, index) => (
      <PersonalInfoItem key={index} title={item.title} data={item.data} link={item.link} />
    ))}
    <SideCaption>About</SideCaption>
  </div>
}

function PersonalInfoItem({index, title, data, link}){
  return <div key={index} className="py-6">
    <p className='font-bold tracking-widest text-xl'>
      {title.toUpperCase()}
    </p>
    <p className="text-lg mt-2" style={{textDecoration: link ? 'underline' : ''}}>
      {link ? <a href={link}>{data}</a> : data}
    </p>
  </div>
}

function SideCaption({children}){
  return <div
    className="
      absolute w-[200%] top-12 right-[100%]
      text-9xl font-yellowtail text-softYellow text-end
    "
    style={{
      transformOrigin: 'top right',
      transform: 'rotate(-90deg) translateY(-80%)',
    }}
  >
    {children}
  </div>
}