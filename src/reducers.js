import {combineReducers} from 'redux'

function countAge(state = 0, action){
    switch (action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}/* 
B. สร้าง reducer ขึ้นมาครับ โดยที่ reducer ก็คือ function ที่รับ state และ action และ return state ตัว
ใหม่ออกไป เอ๊ะ มี action เข้ามา แล้ว action คืออะไร redux ระบุเอาไว้ว่า action จะต้องเป็น javascript object
ที่จะต้องมี properties ชื่อว่า type โดยจะส่งเป็น string หรือตัวแปรที่เก็บ string ก็ได้ เพื่อเอาไปเข้าเงื่อนไข switch ใช้
ในการเปรียบเทียบว่ามันเป็น type อะไร
จากตัวอย่างถ้าส่ง type เป็นคำว่า 'INCREMENT' ก็ให้ทำเงื่อนไขนี้ ถ้าไม่ใช่ก็ทำเงื่อนไขอื่น ง่ายๆแบบนี้แหละคับ
*/

const reducers = combineReducers({
    counter:countAge
})

export default reducers