import { Component } from "@angular/core";
@Component({
    templateUrl:'./header.component.html',
    styleUrls:['./header.component.css'],
    selector:'app-header',
    standalone:true
})
class HeaderComponent{
message="Student Management System";
sayHello() {
    return "Good Evening";
}
}
export default HeaderComponent