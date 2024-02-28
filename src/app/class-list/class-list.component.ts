import { Component } from '@angular/core';
import { ClassItem } from './class';

@Component({
    selector: 'app-class-list',
    templateUrl: './class-list.component.html',
})
export class ClassListComponent {
    title = "Manage Classes"

    classes: ClassItem[] = [
        {
            name: "NUVention Web + Media 2018",
            year: "2017-2018",
            quarters: [1, 2],
            description: "The two quarter course to experience the process of building a software startup"
        },
        {
            name: "Summer Test Class",
            year: "2017-2018",
            quarters: [0],
            description: "a TEST cLASS"
        },
        {
            name: "Serial Entrepreneurship",
            year: "2019-2020",
            quarters: [2],
            description: "Extreme class for serial entrepreneurs!"
        },
        {
            name: "NUvention Web+Media 2020",
            year: "2017-2018",
            quarters: [1, 2],
            description: "NUvention: Web + Media (ENTREP 473) is a two-quarter capstone course in which students work across disciplines and Northwestern schools to design, plan, and run web-based businesses."
        },
        {
            name: "NUvention Energy 2020",
            year: "2020-2021",
            quarters: [1],
            description: "Students from engineering, business, arts and sciences, law and other graduate schools across campus will come together in interdisciplinary teams to develop a product or service, and a business plan, in the sustainable energy or clean tech industry. The objective of the course is to provide students with a realistic simulation of the challenges and opportunities entrepreneurial founding teams face trying to create a business around technologies or services that both meet a market need and have a positive environmental impact."
        },
        {
            name: "Wildfire 2020",
            year: "2020-2021",
            quarters: [0],
            description: "The Northwestern Garage’s Pre-Accelerator program, Wildfire, aims to develop students as both leaders and founders by introducing new ways of thinking and problem solving."
        },
        {
            name: "Ashesi Web Tech 2020",
            year: "2017-2018",
            quarters: [0],
            description: "Ashesi Web Development Class in 2020 with David Sampah and Todd Warren"
        },
        {
            name: "Test Class",
            year: "2018-2019",
            quarters: [2],
            description: "Test Description"
        },
        {
            name: "NUvention Web+Media 2019",
            year: "2018-2019",
            quarters: [1, 2],
            description: "NUvention Web+Media is a 2 quarter capstone course where cross disciplinary teams work together on building a web or mobile startup and launching a product"
        },
        {
            name: "Nexcorps Hardware Challenge 2020",
            year: "2017-2018",
            quarters: [1],
            description: "Teams Present to a panel of judges to win a cash prize and trophy. Our grand-prize winner will move onto the regional AlphaLab Gear Hardware Cup in February 2020."
        },
        {
            name: "Hawks Kingdom",
            year: "2017-2018",
            quarters: [2],
            description: "Welcome to the hawk kingdom"
        },
        {
            name: "NUvention Web+Media 2021",
            year: "2017-2018",
            quarters: [1, 2],
            description: "Two Quarter Entrepreneurship Capstone where students build a web and media startup"
        },
        {
            name: "Ashesi Entrepreneurship Capstone 2020",
            year: "2017-2018",
            quarters: [2],
            description: "Ashesi University Capstone Entrepreneurship Course for Seniors 2020"
        },
        {
            name: "Class of Spartans",
            year: "2020-2021",
            quarters: [2],
            description: "Testing"
        }
    ];

}
