import { getAge } from "@/components/views/Utils";

export default function AboutCol(){
  const whatsAppMessage = 'Hello! I found your web site and I\'m interested on your services. Let\'s talk?'
  const whatsAppLink = `https://wa.me/+5518996076736/?text=${encodeURI(whatsAppMessage)}`
  const age = getAge(4, 6, 1998)  // my birth date

  return <div className="flex flex-row justify-end pr-12" style={{flex: '1 1 50%'}}>
    <PersonalInfoList personalInfo={[
      {title: 'name', data: 'Gabriel Bortolote'},
      {title: 'age', data: age},
      {title: 'role', data: 'Full Stack Engineer'},
      {title: 'email', data: 'gbortolote@gmail.com'},
      {
        title: 'phone',
        data: '+55 18 99607-6736',
        link: whatsAppLink
      },
      {title: 'location', data: 'Brazil'},
      {title: 'hobbies', data: 'Code, Coffee Shop, Gym'},
      {
        title: 'linkedin',
        data: 'GabrielBortolote',
        link: 'https://www.linkedin.com/in/gabriel-bortolote/'
      },
    ]}/>
  </div>
}

function PersonalInfoList({personalInfo}){
  return <div className="w-[60%] bg-softYellow px-12 py-4 rounded text-dark relative">
    {personalInfo.map((item, index) => (
      <PersonalInfoItem key={index} title={item.title} data={item.data} link={item.link} />
    ))}
    <SideCaption>About</SideCaption>
  </div>
}

function PersonalInfoItem({index, title, data, link}){
  return <div key={index} className="py-6 font-semibold">
    <p className='font-extrabold tracking-widest text-xl'>
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