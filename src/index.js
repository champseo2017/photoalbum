import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 


import { Router, browserHistory } from 'react-router'
import routes from './routes'




const store = createStore(countAge)

store.subscribe(()=>{console.log("subscribe", store.getState())})
console.log("befor dispatch", store.getState())/* 
ส่วนที่ไม่ได้พูดถึงคือ ส่วนที่เป็น คำสั่ง console.log ตรงนี้ใน console.log ทางขวามือจะแสดงข้อความ befor dispatch 0 และ subscribe 1 ตามลำดับ
ถ้าย้อนกลับไปดูโค้ดด้านบนนะครับ จะเห็นว่าเราสั่งให้มันแสดง console.log('subscrib'....) ก่อน console.log('before dispatch')
แต่มันแสดง console.log('before dispatch'.....) ก่อนก็เพราะ ตัว store.subscribe จะทำงานเมื่อมีการสั่ง dispatch
(ง่ายๆ คือมันจะทำงานทันทีเหมือนเป็นเงาตามตัวเมื่อเราเรียกใช้ dispatch) ดังนั้นมันจึงแสดง console.log('befor dispatgch) ก่อน

และอีกสิ่งที่ควรรู้คือ ถ้าอยากรู้ว่าใน store มี state อะไร จะต้องใช้คำสั่ง getState() เช่น store.getState()
แทนนะครับ ต่อจากนี้เราจะเอาความรู้จากสิ่งนี้ไปใช้ในการจัดการกับ state ที่เรากำลังมีปัญหาในไฟล์ Home.js พร้อมยังครับ พร้อมแล้วลุยต่อโล้ด
*/

store.dispatch({
    type:'INCREMENT'
})/* 
D. store.dispatch คำสั่ง dispatch เป็นคำสั่งที่เราจะใช้ในการเข้าถึง store ไม่ว่าจะเป็นการเปลียนแปลง state ใน store หรือเรียกข้อมูล
จาก state ใน store เราจะต้องใช้คำสั่ง dispatch นะครับจำไว้นะครับต้องใช้คำสั่ง dispatch โดยใน dispatch จะต้องส่ง javascript object
ที่มี properties ชื่อว่า type โดยใน type จะเป็น string หรือตัวแปรที่เก็บ string ก็ได้ซึ้งคำสั่ง dispatch ก็จะวิ่งเข้าไปทำงานที่ reducer นั้นไงครับ
มันก็ไปเข้าเงื่อนไขในข้อ B
*/


ReactDOM.render(
/*
เอา Provider มาครอบ Router ไว้นะครับโดยส่ง properites ชื่อ store โดยเอา store ที่เราสร้าง
จากข้างบน (const store = ...) ส่งเข้าไปครับ ต่อไป component ไหนจะเรียกใช้ state ก็จะเรียกใช้ได้แล้ว
ครับ
*/
    <Provider store={store}>
    <Router
        history={browserHistory}
        routes={routes}
    />
    </Provider>, 
    /* 
B = redux 
เอา Provider มาครอบ Router ไว้นะครับโดยส่ง properites ชื่อ store โดยเอา store ที่เราสร้าง
จากข้างบน ( const store = ... ) ส่งเข้าไปครับ ต่อไป component ไหนจะเรียกใช้ state ก็จะเรียกใช้
ได้แล้วครับ
*/
    document.getElementById('root')
);

serviceWorker.unregister();

