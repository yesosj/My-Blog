/*eslint-disable*/

import React, {useState, useEffect} from 'react'
import logo from './logo.svg';

import {Nav, Navbar, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import {useNavigate, Link, Route, Routes, useParams, Outlet} from 'react-router-dom'
import axios from 'axios'
// import { faCheckSquare, faSpinner } from "@fortawesome/free-solid-svg-icons";
// import { faSquare } from "@fortawesome/free-regular-svg-icons";


function App(a,i) {
  
  let [start, setstart] = useState(true)
  let navigate = useNavigate()
  let {id} = useParams()

useEffect(()=>{setTimeout(()=>{setstart(false)},2000)},[])

  return (
    <div className="App">
      <div className='ip'><p>yesosj.com</p></div>
      <div className="black-nav">
        <div className='top-bar'><h3 style={{margin : '-5px'}} onClick={()=>{navigate('/')}}>SJ BLOG</h3></div>
        {/* <img alt='list' src='./menu.png'></img><FontAwesomeIcon icon="fa-regular fa-bars" /> */}

        <Routes>
          <Route path="/" element={<First/>}/>

          <Route path="domestic" element={<Domestic navigate={navigate}/>}/>
            <Route path="/domestic/introduce/1" element={<Introduce navigate={navigate}/>}/>
            <Route path="/domestic/introduce/0" element={<Dpage navigate={navigate}/>}/>
            <Route path="/domestic/modal" element={<Modal navigate={navigate}/>}/>

          <Route path="/overseas" element={<Overseas navigate={navigate}/>}/>
            <Route path="/overseas/introduce/1" element={<Introduce navigate={navigate}/>}/>
            <Route path="/overseas/introduce/0" element={<Opage navigate={navigate}/>}/>
            <Route path="/overseas/modal" element={<Modal navigate={navigate}/>}/>

          <Route path="/food" element={<Food navigate={navigate}/>}/>
            <Route path="/food/introduce/1" element={<Introduce navigate={navigate}/>}/>
            <Route path="/food/introduce/0" element={<Fpage navigate={navigate}/>}/>
            <Route path="/food/modal" element={<Modal navigate={navigate}/>}/>

          <Route path="/reviewsell" element={<ReviewSell navigate={navigate}/>}/>
            <Route path="/reviewsell/introduce/1" element={<Introduce navigate={navigate}/>}/>
            <Route path="/reviewsell/introduce/0" element={<Rpage navigate={navigate}/>}/>
            <Route path="/reviewsell/modal" element={<Modal navigate={navigate}/>}/>

          <Route path="/sjej" element={<SjEj navigate={navigate}/>}/>
            <Route path="/sjej/introduce/1" element={<Introduce navigate={navigate}/>}/>
            <Route path="/sjej/introduce/0" element={<Mpage navigate={navigate}/>}/>
            <Route path="/sjej/modal" element={<Modal navigate={navigate}/>}/>

          <Route path="/book" element={<Book navigate={navigate}/>}/>
            <Route path="/book/introduce/1" element={<Introduce navigate={navigate}/>}/>
            <Route path="/book/introduce/0" element={<Bpage navigate={navigate}/>}/>
            <Route path="/book/modal" element={<Modal navigate={navigate}/>}/>

          <Route path="/poetry" element={<Poetry navigate={navigate}/>}/>
            <Route path="/poetry/introduce/1" element={<Introduce navigate={navigate}/>}/>
            <Route path="/poetry/introduce/0" element={<Ppage navigate={navigate}/>}/>
            <Route path="/poetry/modal" element={<Modal navigate={navigate}/>}/>
            
          <Route path="/guitar" element={<Guitar navigate={navigate}/>}/>
            <Route path="/guitar/introduce/1" element={<Introduce navigate={navigate}/>}/>
            <Route path="/guitar/introduce/0" element={<Gpage navigate={navigate}/>}/>
            <Route path="/guitar/modal" element={<Modal navigate={navigate}/>}/>
        </Routes>

      </div>
      {/* {
        start == true
        ?<div className='Modal'>2초 후 사라짐</div>
        :null
      } */}
    </div>
  )}

function First (){

  let [fade, setfade] = useState('')

  let [num, setnum] = useState('')

  let [title, settitle] = useState(['', 'SJ BLOG에 오신걸 환영합니다.'])

  useEffect(()=>{
    setTimeout(()=>{setfade('end')},100)
    return()=>{
      setfade('')
    }
  },[])


  return(
      <>
        <Nav className="flex-column">
          <div className={'start '+ fade}>
          <Nav.Link as={Link} to="/">ALL</Nav.Link>
            <ul> 
              <Nav.Link as={Link} to="/">TRAVEL</Nav.Link>
                <li>
                  <Nav.Link as={Link} to="/domestic" onClick={()=>{setnum(0)}}>국내</Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/overseas" onClick={()=>{setnum(1)}}>해외</Nav.Link>
                </li>
            </ul>

            <ul>
              <Nav.Link as={Link} to="/food" onClick={()=>{setnum(2)}}>FOOD</Nav.Link>
            </ul>

            <ul>
              <Nav.Link as={Link} to="/reviewsell" onClick={()=>{setnum(3)}}>REVIEW & SELL</Nav.Link>
            </ul>
         
            <ul>
              <Nav.Link as={Link} to="/sjej" onClick={()=>{setnum(4)}}>MEMORIES</Nav.Link>
            </ul>

            <ul>
              <Nav.Link as={Link} to="/">HOBBY</Nav.Link>
                <li>
                  <Nav.Link as={Link} to="/book" onClick={()=>{setnum(5)}}>독서</Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/poetry" onClick={()=>{setnum(6)}}>시</Nav.Link>
                </li>
                <li>
                  <Nav.Link as={Link} to="/guitar" onClick={()=>{setnum(7)}}>기타</Nav.Link>
                </li>
            </ul>
            </div>
          </Nav>
        
        <If title={title} num={num}/>
         

          </>
          
  )

}

function If(props){

  return console.log(props.title[1])
}

function Domestic(props) {

  let [inpu, setinpu] = useState('');
  let [title, settitle] = useState(['국내여행 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  return(
    <>
      <div className='domestic'>
        <h4>국내 페이지</h4>
        <div className='upload'>
          <div><p>전체 글 0</p></div>
          <div><p></p></div>
        </div>
        {/* <button onClick={()=>{
            axios.get('https://codingapple1.github.io/shop/data2.json')
            .then((결과)=>{
              console.log(결과.data)
            })
            .catch(()=>{
              console.log('실패함ㅅㄱ')
            })
          }}>버튼</button> */}
        <p>
          <form action="/action_page.php">
            <label for="username">검색:</label>
            <input onChange={(e)=>{setinpu(e.target.value)}}/>
            <button>검색</button>
            <button onClick={()=>{props.navigate('/domestic/modal')}}>글 올리기</button>
          </form>
        </p>
      </div>
      <div className='flex' >
        
        {
          title.map(function(a,i){
            return(
            <div className='Pdomestic' onClick={()=>{
              props.navigate('/domestic/introduce/'+i)
            }} key={i}>
              <h5>{title[i]}</h5>  
              <p>10월 1일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                settitle(copy);
              }}>삭제</button>
            </div> 
            
            )
          })
        }

      </div>
    </>
    
  )
}

function Overseas(props) {
  let [inpu, setinpu] = useState('');
  let [title, settitle] = useState(['해외여행 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  return(
    <>
      <div className='domestic'>
        <h4>해외 페이지</h4>
        <div className='upload'>
          <div><p>전체 글 0</p></div>
          <div><p></p></div>
        </div>
        
        <p>
          <form action="/action_page.php">
            <label for="username">검색:</label>
            <input onChange={(e)=>{setinpu(e.target.value)}}/>
            <button>검색</button>
            <button onClick={()=>{props.navigate('/overseas/modal')}}>글 올리기</button>
          </form>
        </p>
      </div>
      <div className='flex' >
        
        {
          title.map(function(a,i){
            return(
            <div className='Pdomestic' onClick={()=>{
              props.navigate('/overseas/introduce/'+i)
            }} key={i}>
              <h5>{title[i]}</h5>  
              <p>10월 1일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                settitle(copy);
              }}>삭제</button>
            </div> 
            
            )
          })
        }

      </div>
    </>
  )
}
function Food(props) {
  let [inpu, setinpu] = useState('');
  let [title, settitle] = useState(['음식 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  return(
    <>
      <div className='domestic'>
        <h4>음식 페이지</h4>
        <div className='upload'>
          <div><p>전체 글 0</p></div>
          <div><p></p></div>
        </div>
        
        <p>
          <form action="/action_page.php">
            <label for="username">검색:</label>
            <input onChange={(e)=>{setinpu(e.target.value)}}/>
            <button>검색</button>
            <button onClick={()=>{props.navigate('/food/modal')}}>글 올리기</button>
          </form>
        </p>
      </div>
      <div className='flex' >
        
        {
          title.map(function(a,i){
            return(
            <div className='Pdomestic' onClick={()=>{
              props.navigate('/food/introduce/'+i)
            }} key={i}>
              <h5>{title[i]}</h5>  
              <p>10월 1일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                settitle(copy);
              }}>삭제</button>
            </div> 
            
            )
          })
        }

      </div>
    </>
  )
}
function ReviewSell(props) {
  let [inpu, setinpu] = useState('');
  let [title, settitle] = useState(['리뷰 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  return(
    <>
      <div className='domestic'>
        <h4>리뷰 페이지</h4>
        <div className='upload'>
          <div><p>전체 글 0</p></div>
          <div><p></p></div>
        </div>
        
        <p>
          <form action="/action_page.php">
            <label for="username">검색:</label>
            <input onChange={(e)=>{setinpu(e.target.value)}}/>
            <button>검색</button>
            <button onClick={()=>{props.navigate('/reviewsell/modal')}}>글 올리기</button>
          </form>
        </p>
      </div>
      <div className='flex' >
        
        {
          title.map(function(a,i){
            return(
            <div className='Pdomestic' onClick={()=>{
              props.navigate('/reviewsell/introduce/'+i)
            }} key={i}>
              <h5>{title[i]}</h5>  
              <p>10월 1일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                settitle(copy);
              }}>삭제</button>
            </div> 
            
            )
          })
        }

      </div>
    </>
  )
}
function SjEj(props) {
  let [inpu, setinpu] = useState('');
  let [title, settitle] = useState(['SJ & EJ 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  return(
    <>
      <div className='domestic'>
        <h4>SJ & EJ 페이지</h4>
        <div className='upload'>
          <div><p>전체 글 0</p></div>
          <div><p></p></div>
        </div>
        
        <p>
          <form action="/action_page.php">
            <label for="username">검색:</label>
            <input onChange={(e)=>{setinpu(e.target.value)}}/>
            <button>검색</button>
            <button onClick={()=>{props.navigate('/sjej/modal')}}>글 올리기</button>
          </form>
        </p>
      </div>
      <div className='flex' >
        
        {
          title.map(function(a,i){
            return(
            <div className='Pdomestic' onClick={()=>{
              props.navigate('/sjej/introduce/'+i)
            }} key={i}>
              <h5>{title[i]}</h5>  
              <p>10월 1일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                settitle(copy);
              }}>삭제</button>
            </div> 
            
            )
          })
        }

      </div>
    </>
  )
}
function Book(props) {
  let [inpu, setinpu] = useState('');
  let [title, settitle] = useState(['독서 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  return(
    <>
      <div className='domestic'>
        <h4>독서 페이지</h4>
        <div className='upload'>
          <div><p>전체 글 0</p></div>
          <div><p></p></div>
        </div>
        
        <p>
          <form action="/action_page.php">
            <label for="username">검색:</label>
            <input onChange={(e)=>{setinpu(e.target.value)}}/>
            <button>검색</button>
            <button onClick={()=>{props.navigate('/book/modal')}}>글 올리기</button>
          </form>
        </p>
      </div>
      <div className='flex' >
        
        {
          title.map(function(a,i){
            return(
            <div className='Pdomestic' onClick={()=>{
              props.navigate('/book/introduce/'+i)
            }} key={i}>
              <h5>{title[i]}</h5>  
              <p>10월 1일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                settitle(copy);
              }}>삭제</button>
            </div> 
            
            )
          })
        }

      </div>
    </>
  )
}
function Poetry(props) {
  let [inpu, setinpu] = useState('');
  let [title, settitle] = useState(['시 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  return(
    <>
      <div className='domestic'>
        <h4>시 페이지</h4>
        <div className='upload'>
          <div><p>전체 글 0</p></div>
          <div><p></p></div>
        </div>
        
        <p>
          <form action="/action_page.php">
            <label for="username">검색:</label>
            <input onChange={(e)=>{setinpu(e.target.value)}}/>
            <button>검색</button>
            <button onClick={()=>{props.navigate('/poetry/modal')}}>글 올리기</button>
          </form>
        </p>
      </div>
      <div className='flex' >
        
        {
          title.map(function(a,i){
            return(
            <div className='Pdomestic' onClick={()=>{
              props.navigate('/poetry/introduce/'+i)
            }} key={i}>
              <h5>{title[i]}</h5>  
              <p>10월 1일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                settitle(copy);
              }}>삭제</button>
            </div> 
            
            )
          })
        }

      </div>
    </>
  )
}
function Guitar(props) {
  let [inpu, setinpu] = useState('');
  let [title, settitle] = useState(['기타 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  return(
    <>
      <div className='domestic'>
        <h4>기타 페이지</h4>
        <div className='upload'>
          <div><p>전체 글 0</p></div>
          <div><p></p></div>
        </div>
        
        <p>
          <form action="/action_page.php">
            <label for="username">검색:</label>
            <input onChange={(e)=>{setinpu(e.target.value)}}/>
            <button>검색</button>
            <button onClick={()=>{props.navigate('/guitar/modal')}}>글 올리기</button>
          </form>
        </p>
      </div>
      <div className='flex' >
        
        {
          title.map(function(a,i){
            return(
            <div className='Pdomestic' onClick={()=>{
              props.navigate('/guitar/introduce/'+i)
            }} key={i}>
              <h5>{title[i]}</h5>  
              <p>10월 1일 발행</p>
              <button onClick={()=>{
                let copy = [...title];
                copy.splice(i,1);
                settitle(copy);
              }}>삭제</button>
            </div> 
            
            )
          })
        }

      </div>
    </>
  )
}








function Modal(props){

  let [title, settitle] = useState(['기타 페이지 입니다.', 'SJ BLOG에 오신걸 환영합니다.'])
  let [Input, setInput] = useState('')
  localStorage.setItem('data', JSON.stringify(Input))

  return(
    <>
      <div className='modal'>
        <p>제목 : <input></input></p>
        <p>내용 : </p><textarea onChange={(e)=>{setInput(e.target.value)}} rows='15' cols="36"></textarea><hr/>
        <button onClick={()=>{
      
          let a = localStorage.getItem('data');
          let b = JSON.parse(a);
          
          let copy = [...title];
          localStorage.getItem(b);
          copy.unshift(b);
          settitle(copy);
        
        }}>글 올리기</button>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      
      <Outlet></Outlet>
    </>
  )
}

function Introduce(props){
  return(
    <>
      <div className='introduce'>
        <h3>SJ BLOG에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}




function Dpage(props){
  return(
    <>
      <div className='Dpage'>
        <h3>국내 페이지에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}
function Opage(props){
  return(
    <>
      <div className='Opage'>
        <h3>해외 페이지에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}
function Fpage(props){
  return(
    <>
      <div className='Fpage'>
        <h3>국내 페이지에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}
function Rpage(props){
  return(
    <>
      <div className='Rpage'>
        <h3>국내 페이지에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}
function Mpage(props){
  return(
    <>
      <div className='Mpage'>
        <h3>국내 페이지에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}
function Bpage(props){
  return(
    <>
      <div className='Bpage'>
        <h3>국내 페이지에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}
function Ppage(props){
  return(
    <>
      <div className='Ppage'>
        <h3>국내 페이지에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}
function Gpage(props){
  return(
    <>
      <div className='Gpage'>
        <h3>국내 페이지에 오신걸 환영합니다.</h3>
        <button onClick={()=>{
          props.navigate(-1)
        }}>뒤로 가기</button>
      </div>
      <Outlet></Outlet>
    </>
  )
}




export default App;
  


//리액트는 state를 변경하면 html은 알아서 재랜더링되어서 html을 어떻게 정렬할까가 아니라
//state를 어떻게 정렬할까 이다. state가 UI의 현재상태를 보관하는 저장소역할을 한다.

//1. css파일이 여러개 적용 되어있는 상태라면 가장 뒤에 있는 파일의 css속성이 우선 적용됩니다!! 


// import를 할 때 위의 순서처럼 해야지만 

// 제 맘대로 수정한 css 속성들이 bootstrap css 속성들을 덮어쓰게 되는거죠.

 

 

// 2. css는 우선순위가 있습니댜!!

 

// css는 기본적으로 가장 나중에 쓴 속성이 우선적용되고, 

// !important > inline style > id > class , 수도클래스 > tag , 수도엘리먼트 순으로 우선순위를 가집니다.

 

 

 

// 3. css는 우선도 점수가 있습니다!!

 

// 인라인 스타일 = 1000점

// id = 100점

// 클래스 , 수도클래스 = 10점

// 태그선택자 , 수도엘리먼트 = 1점

 