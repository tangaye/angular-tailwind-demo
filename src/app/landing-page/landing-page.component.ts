import { Component } from '@angular/core';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html'
})
export class LandingPageComponent {
    features = [
        {
            name: 'Instant Access to Feedback',
            imageSrc: '/assets/icons/feedback.svg',
            description: "Teams can instantly view feedback and numeric results from judges, coaches, faculty, and other students."
        },
        {
            name: 'Presentation Session Management',
            imageSrc: '/assets/icons/management.svg',
            description: "Faculty can create and manage multiple presentation sessions throughout a class or cohort experience.",
        },

        {
            name: 'Built-in Reporting Tools',
            imageSrc: '/assets/icons/report.svg',
            description: "Pitcheval comes equipped with bulit in reporting tools that make it easy to see results; and they can be exported to a CSV file."
        },
    ]

    stakeholders = [
        {
            name: "Student and Teams",
            imageSrc: "/assets/student.svg",
            description: "Student teams can review feedback from faculty and advisors who view presentations. Students can also provide comments and feedback to other teams as part of the process.<br><br>Students can login using their google email account.If you are student judging a session, after you login you may see a bar just below the menu toolbar to select the name of the session. Your faculty member will give you a session wide student judging password to let you in. You will be able to identify your team during this process.<br><br>Student team members can build out their own team page, with relevant links and information for judges on their own Team page."
        },
        {
            name: "Faculty",
            imageSrc: "/assets/faculty.svg",
            description: "Faculty can create questionnaires that can be used across multiple pitch sessions and classes.Quickly create teams.Let judges and students 'opt in' automatically--no need to manage a roster of students, or keep track of judge's email addresses.<br><br>Pitch sessions can scale to hundreds of students and judges.View results quickly across teams and export to a CSV file.<br><br>Teams can build a simple page that explains their team to the judges.After evaluation, teams can view their own results automatically, including comments from faculty, judges, and classmates."
        },
        {
            name: "Judges",
            imageSrc: "/assets/judges.svg",
            description: "Login using your google account and evaluate a pitch session. Rate and stack rank teams.Leave comments for teams, and view more information about teams, team members, and sessions."
        },
    ]
}
