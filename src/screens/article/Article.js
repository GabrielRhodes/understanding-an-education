import './index.scss'
import articleData from '../../articles/articleData'

export default function Article({ link }) {
  console.log(link)
  let a = articleData.find((e) => {
    return e.link == link
  })
  console.log(articleData)
  return (
    <>
      <div id='article'>
        <h1>{a.title}</h1>
        <img src={a.image}></img>
        {a.body}
        <p className='author'>Written by {a.author}</p>
      </div>
    </>
  )
}
