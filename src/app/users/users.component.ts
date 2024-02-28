import { Component } from '@angular/core';
import { User } from './user';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
})
export class UsersComponent {
    title = "Manage Users"
    users: User[] = [
        {
            photo: "https://randomuser.me/api/portraits/men/1.jpg",
            name: "John Doe",
            email: "john.doe@example.com",
            roles: ["developer", "designer"],
            className: "Class A",
            team: "A"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/2.jpg",
            name: "Jane Smith",
            email: "jane.smith@example.com",
            roles: ["project manager"],
            className: "Class B",
            team: "B"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/3.jpg",
            name: "Michael Johnson",
            email: "michael.johnson@example.com",
            roles: ["tester", "analyst"],
            className: "Class C",
            team: "C"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/4.jpg",
            name: "Emily Brown",
            email: "emily.brown@example.com",
            roles: ["marketing specialist"],
            className: "Class D",
            team: "D"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/5.jpg",
            name: "David Wilson",
            email: "david.wilson@example.com",
            roles: ["developer"],
            className: "Class E",
            team: "F"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/6.jpg",
            name: "Sarah Garcia",
            email: "sarah.garcia@example.com",
            roles: ["designer"],
            className: "Class F",
            team: "A"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/7.jpg",
            name: "Christopher Martinez",
            email: "christopher.martinez@example.com",
            roles: ["project manager", "developer"],
            className: "Class G",
            team: "B"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/8.jpg",
            name: "Amanda Robinson",
            email: "amanda.robinson@example.com",
            roles: ["analyst"],
            className: "Class H",
            team: "C"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/9.jpg",
            name: "Daniel Lee",
            email: "daniel.lee@example.com",
            roles: ["developer", "designer"],
            className: "Class I",
            team: "D"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/10.jpg",
            name: "Jessica Nguyen",
            email: "jessica.nguyen@example.com",
            roles: ["project manager"],
            className: "Class J",
            team: "F"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/11.jpg",
            name: "Kevin Taylor",
            email: "kevin.taylor@example.com",
            roles: ["tester"],
            className: "Class K",
            team: "A"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/12.jpg",
            name: "Olivia Anderson",
            email: "olivia.anderson@example.com",
            roles: ["developer"],
            className: "Class L",
            team: "B"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/13.jpg",
            name: "William Thomas",
            email: "william.thomas@example.com",
            roles: ["designer"],
            className: "Class M",
            team: "C"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/14.jpg",
            name: "Sophia White",
            email: "sophia.white@example.com",
            roles: ["project manager", "analyst"],
            className: "Class N",
            team: "D"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/15.jpg",
            name: "Ethan Hall",
            email: "ethan.hall@example.com",
            roles: ["developer"],
            className: "Class O",
            team: "F"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/16.jpg",
            name: "Madison Martinez",
            email: "madison.martinez@example.com",
            roles: ["designer"],
            className: "Class P",
            team: "A"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/17.jpg",
            name: "Alexander Scott",
            email: "alexander.scott@example.com",
            roles: ["project manager", "developer"],
            className: "Class Q",
            team: "B"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/18.jpg",
            name: "Samantha Phillips",
            email: "samantha.phillips@example.com",
            roles: ["tester"],
            className: "Class R",
            team: "C"
        },
        {
            photo: "https://randomuser.me/api/portraits/men/19.jpg",
            name: "David Baker",
            email: "david.baker@example.com",
            roles: ["developer", "designer"],
            className: "Class S",
            team: "D"
        },
        {
            photo: "https://randomuser.me/api/portraits/women/20.jpg",
            name: "Emma Lewis",
            email: "emma.lewis@example.com",
            roles: ["project manager"],
            className: "Class T",
            team: "F"
        }
    ]


}
