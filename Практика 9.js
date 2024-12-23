let user = {
    name: "Джо спин",
    age: 30
  };
  user.sayHi = function() {
    alert("Привет!");
  };
  user.sayHi(); // Привет!
  let zxc = {
    name: "Забрасков Никата",
    address: "ул. Стравопольская д.32",
    phone: "+8 (800) 555-35-35",
    email: "ZaNi@gmail.com",
    orderHistory: [] 
   };
   
   console.log(zxc.name); 
   console.log(zxc.address); 
   console.log(zxc.phone); 
   let children = {
    name: "Кирилл",
    isAdmin: false
   };
   let fff = {
  userID: 1,
  ZAKAZ: 2,
  items: ["Man","Plov"],
  status: "Ожидание"
   }
   let restaurant = {
    id:2,
    name: "gg vp",
    address:"хз"
   };
   if (fff.status === "Ожидание") {
    console.log(`Заказ ${fff.userId} от пользователя ${children.name} в ресторане ${restaurant.name} ожидание.`);
  }
  function GroupMember(name) {
    this.name = name;
   }
   
   const member1 = new GroupMember("Никита");
   const member2 = new GroupMember("Кирилл");
   const member3 = new GroupMember("Женя");
   
   console.log(`Члены группы: ${member1.name}, ${member2.name}, ${member3.name}`);
   function Student(name, group, courses) {
    this.name = name;
    this.group = group;
    this.courses = courses;
   
    this.sayHi = function() {
     console.log(`Меня зовут ${this.name}, я учусь в группе ${this.group}.`);
    };
   
    this.showCourses = function() {
     console.log(`Я учусь на следующих курсах: ${this.courses.join(', ')}`);
    };
   }
   
   const vasya = new Student("Никита", "ИСП-309", ["WEB"]);
   
   vasya.sayHi(); 
   vasya.showCourses();