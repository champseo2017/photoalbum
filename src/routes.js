import App from './pages/App';
import Home from './pages/Home';
import User from './pages/User';

const routes = [{
    path:'/',
    component: App,
    indexRoute: { component:Home },
    childRoutes:[
        {path:'user', component:User}
    ]
}]

export default routes
/* 
อธิบายโค้ด
A. import Home.js และ User.js เข้ามาใช้งาน
B. indexRoute ตัวแปรนี้เป็นการบอกระบบว่าจะให้แสดง Component ไหนเป็นหน้าแรก อาจจะแสดงหน้า Dash-board
หรือ หน้า Home เหมือนในโค้ด (มันอาจจะดูทับซ้อนกับ path:'/' นะครับแต่จริงๆมันก็ทำหน้ากันคนล่ะอย่าง)
C. childRoutes ตัวแปรนี้จะเป็นแบบ Array นะครับแล้วข้างในมี Object ที่ต้องระบุ path กับ component ที่
ต้องการให้แสดงเมื่อมี path เข้ามาตรงกับที่กำหนดไว้ใน childRoutes ถ้าย้อนกลับไปดูข้อ 1 ที่มีการสร้าง Link นั้นแหละ
ครับตรง Link นั้นที่มีการสั่ง to เช่น <Link to="/user" className="navbar-item">Photo</Link>ตรงจุดนี้แหละ
ครับมันจะมาตรงกับ childRoutes ที่ระบุ path="user" มันก็จะไปหยิบเอา component User ขึ้นมา render (ใส่ / 
หรือไม่ใส่ / ก็ได้นะครับ ปกติเข้าจะไม่ใส่กัน) แต่ถ้าเป็น <Link to="/" className="navbar-item">Home</Link>
ซึ้งจะสังเกตุว่า to ระบุแค่ / ดังนั้นเมื่อเข้ามาหน้าแรกของเว็บมันก็จะไปตรงกับเงื่อนไขในการกำหนด indexRoute แต่ถ้าเรา
ไม่กำหนด indexRoute มันก็จะไปเข้าเงื่อนไขแรกคือ path:'/' ดังนั้นมันก็จะแสดงสิ่งที่อยู่ใน src/pages/App.js ออกมา
ซึ้งปกติเขาจะไม่ทำกันหรอครับ เขาจะต้องมีการกำหนด indexRoute เพราะเขาจะใช้ path:'/' เป็นการสั่งให้แสดง component
ที่จะใช้เป็น Layoute ออกมา

*/