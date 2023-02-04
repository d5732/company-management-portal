package com.cooksys.groupfinal;

import com.cooksys.groupfinal.entities.*;
import com.cooksys.groupfinal.repositories.*;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Timestamp;
import java.util.Arrays;
import java.util.HashSet;

@Component
@RequiredArgsConstructor
public class Seeder implements CommandLineRunner {

    private final AnnouncementRepository announcementRepository;
    private final CompanyRepository companyRepository;
    private final ProjectRepository projectRepository;
    private final TeamRepository teamRepository;
    private final UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {

        Announcement announcement1 = new Announcement();
        Announcement announcement2 = new Announcement();
        Announcement announcement3 = new Announcement();
        Announcement announcement4 = new Announcement();
        Announcement announcement5 = new Announcement();
        Announcement announcement6 = new Announcement();
        Announcement announcement7 = new Announcement();
        Announcement announcement8 = new Announcement();
        Announcement announcement9 = new Announcement();

        Company company1 = new Company();
        Company company2 = new Company();
        Company company3 = new Company();

        Project project1 = new Project();
        Project project2 = new Project();
        Project project3 = new Project();
        Project project4 = new Project();
        Project project5 = new Project();
        Project project6 = new Project();

        Team team1 = new Team();
        Team team2 = new Team();
        Team team3 = new Team();
        Team team4 = new Team();
        Team team5 = new Team();
        Team team6 = new Team();
        Team team7 = new Team();
        Team team8 = new Team();
        Team team9 = new Team();
        Team team10 = new Team();
        Team team11 = new Team();

        User user1 = new User();
        Credentials creds1 = new Credentials();
        creds1.setUsername("cousingreg");
        creds1.setPassword("mosteligiblebachelor");
        user1.setCredentials(creds1);
        Profile profile1 = new Profile();
        profile1.setFirstName("Greg");
        profile1.setLastName("Hirsch");
        profile1.setEmail("ghirsch@email.com");
        profile1.setPhone("(000) 000-0000");
        user1.setProfile(profile1);
        user1.setActive(true);

        User user2 = new User();
        Credentials creds2 = new Credentials();
        creds2.setUsername("mrsiobhanroy");
        creds2.setPassword("idontwanttogotojail");
        user2.setCredentials(creds2);
        Profile profile2 = new Profile();
        profile2.setFirstName("Tom");
        profile2.setLastName("Wambsgans");
        profile2.setEmail("twambsgans@email.com");
        profile2.setPhone("(111) 111-1111");
        user2.setProfile(profile2);
        user2.setActive(true);

        User user3 = new User();
        Credentials creds3 = new Credentials();
        creds3.setUsername("homeboykroy");
        creds3.setPassword("ltotheog");
        user3.setCredentials(creds3);
        Profile profile3 = new Profile();
        profile3.setFirstName("Kendall");
        profile3.setLastName("Roy");
        profile3.setEmail("kroy@email.com");
        profile3.setPhone("(222) 222-2222");
        user3.setProfile(profile3);

        User user4 = new User();
        Credentials creds4 = new Credentials();
        creds4.setUsername("romulusroy");
        creds4.setPassword("iknownothingaboutsoccer");
        user4.setCredentials(creds4);
        Profile profile4 = new Profile();
        profile4.setFirstName("Roman");
        profile4.setLastName("Roy");
        profile4.setEmail("rroy@email.com");
        profile4.setPhone("(333) 333-3333");
        user4.setProfile(profile4);
        user4.setActive(true);

        User user5 = new User();
        Credentials creds5 = new Credentials();
        creds5.setUsername("pinky");
        creds5.setPassword("futureceoofwaystar");
        user5.setCredentials(creds5);
        Profile profile5 = new Profile();
        profile5.setFirstName("Siobhan");
        profile5.setLastName("Roy");
        profile5.setEmail("sroy@email.com");
        profile5.setPhone("(444) 444-4444");
        user5.setProfile(profile5);
        user5.setActive(true);

        User user6 = new User();
        Credentials creds6 = new Credentials();
        creds6.setUsername("thisismycompany");
        creds6.setPassword("getyourowncompany");
        user6.setCredentials(creds6);
        Profile profile6 = new Profile();
        profile6.setFirstName("Logan");
        profile6.setLastName("Roy");
        profile6.setEmail("lroy@email.com");
        profile6.setPhone("(555) 555-5555");
        user6.setProfile(profile6);
        user6.setActive(true);
        user6.setAdmin(true);

        User user7 = new User();
        Credentials creds7 = new Credentials();
        creds7.setUsername("iamtheeldestson");
        creds7.setPassword("interestedinpoliticsataveryyoungage");
        user7.setCredentials(creds7);
        Profile profile7 = new Profile();
        profile7.setFirstName("Connor");
        profile7.setLastName("Roy");
        profile7.setEmail("croy@email.com");
        profile7.setPhone("(666) 666-6666");
        user7.setProfile(profile7);

        User user8 = new User();
        Credentials creds8 = new Credentials();
        creds8.setUsername("marciaroy");
        creds8.setPassword("amir");
        user8.setCredentials(creds8);
        Profile profile8 = new Profile();
        profile8.setFirstName("Marcia");
        profile8.setLastName("Roy");
        profile8.setEmail("mroy@email.com");
        profile8.setPhone("(777) 777-7777");
        user8.setProfile(profile8);

        User user9 = new User();
        Credentials creds9 = new Credentials();
        creds9.setUsername("temporaryceoofwaystar");
        creds9.setPassword("idontgetpaidenoughforthis");
        user9.setCredentials(creds9);
        Profile profile9 = new Profile();
        profile9.setFirstName("Gerri");
        profile9.setLastName("Kellman");
        profile9.setEmail("gkellman@email.com");
        profile9.setPhone("(888) 888-8888");
        user9.setProfile(profile9);
        user9.setActive(true);
        user9.setAdmin(true);

        User user10 = new User();
        Credentials creds10 = new Credentials();
        creds10.setUsername("helenasusername");
        creds10.setPassword("helenaspassword");
        user10.setCredentials(creds10);
        Profile profile10 = new Profile();
        profile10.setFirstName("Helena");
        profile10.setLastName("Makendengue");
        profile10.setEmail("helena@email.com");
        profile10.setPhone("(000) 000-0000");
        user10.setProfile(profile10);
        user10.setActive(true);

        User user11 = new User();
        Credentials creds11 = new Credentials();
        creds11.setUsername("kennysusername");
        creds11.setPassword("kennyspassword");
        user11.setCredentials(creds11);
        Profile profile11 = new Profile();
        profile11.setFirstName("Kenny");
        profile11.setLastName("Worth");
        profile11.setEmail("kenny@email.com");
        profile11.setPhone("(111) 111-1111");
        user11.setProfile(profile11);
        user11.setActive(true);

        User user12 = new User();
        Credentials creds12 = new Credentials();
        creds12.setUsername("willsusername");
        creds12.setPassword("willspassword");
        user12.setCredentials(creds12);
        Profile profile12 = new Profile();
        profile12.setFirstName("Will");
        profile12.setLastName("Marttala");
        profile12.setEmail("will@email.com");
        profile12.setPhone("(222) 222-2222");
        user12.setProfile(profile12);
        user12.setActive(true);
        user12.setAdmin(true);


        announcementRepository.saveAllAndFlush(Arrays.asList(new Announcement[]{announcement1, announcement2, announcement3, announcement4, announcement5}));
        companyRepository.saveAllAndFlush(Arrays.asList(new Company[]{company1, company2}));
        projectRepository.saveAllAndFlush(Arrays.asList(new Project[]{project1, project2, project3}));
        teamRepository.saveAllAndFlush(Arrays.asList(new Team[]{team1, team2, team3, team4, team5, team6, team7}));
        userRepository.saveAllAndFlush(Arrays.asList(new User[]{user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12}));


        announcement1.setTitle("Welcome to waystar|ROYCO!");
        announcement1.setMessage("We are waystar|ROYCO, the future of media, entertainment, and theme parks!");
        announcement1.setCompany(company1);
        announcement1.setAuthor(user9);

        announcement2.setTitle("Launch of New ATN Slogan");
        announcement2.setMessage("We here [sic] for you");
        announcement2.setCompany(company1);
        announcement2.setAuthor(user2);

        announcement3.setTitle("Welcome to Cook Systems!");
        announcement3.setMessage("This dashboard is where you'll find all of the latest projects currently in developement.");
        announcement3.setCompany(company2);
        announcement3.setAuthor(user12);

        announcement4.setTitle("Congrats to Siobhan Roy & Tom Wambsgans!");
        announcement4.setMessage("Congrats to our very own Siobhan Roy & Tom Wambsgans on their wedding this past weekend!");
        announcement4.setCompany(company1);
        announcement4.setAuthor(user9);

        announcement5.setTitle("New Angular Content");
        announcement5.setMessage("New Angular video content and assignments are on the way!");
        announcement5.setCompany(company2);
        announcement5.setAuthor(user12);


        company1.setName("waystar|ROYCO");
        company1.setDescription("waystar|ROYCO, the future of media, entertainment, and theme parks.");
        company1.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement1, announcement2)));
        company1.setEmployees(new HashSet<User>(Arrays.asList(user1, user2, user3, user4, user5, user6, user7, user8, user9)));
        company1.setTeams(new HashSet<Team>(Arrays.asList(team1, team2, team3, team4, team5, team6)));

        company2.setName("Cook Systems");
        company2.setDescription("We are Cook Systems.");
        company2.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement3)));
        company2.setEmployees(new HashSet<User>(Arrays.asList(user10, user11, user12)));
        company2.setTeams(new HashSet<Team>(Arrays.asList(team7)));


        project1.setName("Brightstar Theme Park Expansion");
        project1.setDescription("Brightstar theme park expansion to be led by newly appointed head of waystar|ROYCO's amusement park and cruise division, Tom Wambsgans.");
        project1.setActive(true);
        project1.setTeam(team1);

        project2.setName("New Angular Content");
        project2.setDescription("New Angular video content and assignments are on the way!");
        project2.setActive(true);
        project2.setTeam(team7);

        project3.setName("Shuttle Launch");
        project3.setDescription("Shuttle launch in Japan to be led by COO, Roman Roy.");
        project3.setActive(true);
        project3.setTeam(team3);


        team1.setName("Team 1");
        team1.setDescription("Greg & Tom");
        team1.setCompany(company1);
        team1.setUsers(new HashSet<User>(Arrays.asList(user1, user2)));
        team1.setProjects(new HashSet<Project>(Arrays.asList(project1)));

        team2.setName("Team 2");
        team2.setDescription("Tom & Shiv");
        team2.setCompany(company1);
        team2.setUsers(new HashSet<User>(Arrays.asList(user2, user5)));

        team3.setName("Team 3");
        team3.setDescription("Roman & Gerri");
        team3.setCompany(company1);
        team3.setUsers(new HashSet<User>(Arrays.asList(user4, user9)));
        team3.setProjects(new HashSet<Project>(Arrays.asList(project3)));

        team4.setName("Team 4");
        team4.setDescription("Greg & Kendall");
        team4.setCompany(company1);
        team4.setUsers(new HashSet<User>(Arrays.asList(user1, user3)));

        team5.setName("Team 5");
        team5.setDescription("Logan & Marcia");
        team5.setCompany(company1);
        team5.setUsers(new HashSet<User>(Arrays.asList(user6, user8)));

        team6.setName("Team 6");
        team6.setDescription("Kendall, Roman, Shiv & Connor");
        team6.setCompany(company1);
        team6.setUsers(new HashSet<User>(Arrays.asList(user3, user4, user5, user7)));

        team7.setName("Team 7");
        team7.setDescription("Helena, Kenny & Will");
        team7.setCompany(company2);
        team7.setUsers(new HashSet<User>(Arrays.asList(user10, user11, user12)));
        team7.setProjects(new HashSet<Project>(Arrays.asList(project2)));


        user1.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user1.setTeams(new HashSet<Team>(Arrays.asList(team1, team4)));

        user2.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement2)));
        user2.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user2.setTeams(new HashSet<Team>(Arrays.asList(team1, team2)));

        user3.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user3.setTeams(new HashSet<Team>(Arrays.asList(team4, team6)));

        user4.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user4.setTeams(new HashSet<Team>(Arrays.asList(team3, team6)));

        user5.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user5.setTeams(new HashSet<Team>(Arrays.asList(team2, team6)));

        user6.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user6.setTeams(new HashSet<Team>(Arrays.asList(team5)));

        user7.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user7.setTeams(new HashSet<Team>(Arrays.asList(team6)));

        user8.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user8.setTeams(new HashSet<Team>(Arrays.asList(team5)));

        user9.setCompanies(new HashSet<Company>(Arrays.asList(company1)));
        user9.setTeams(new HashSet<Team>(Arrays.asList(team3)));

        user10.setCompanies(new HashSet<Company>(Arrays.asList(company2)));
        user10.setTeams(new HashSet<Team>(Arrays.asList(team7)));

        user11.setCompanies(new HashSet<Company>(Arrays.asList(company2)));
        user11.setTeams(new HashSet<Team>(Arrays.asList(team7)));

        user12.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement3)));
        user12.setCompanies(new HashSet<Company>(Arrays.asList(company2)));
        user12.setTeams(new HashSet<Team>(Arrays.asList(team7)));


        announcementRepository.saveAllAndFlush(Arrays.asList(new Announcement[]{announcement1, announcement2, announcement3, announcement4, announcement5}));
        companyRepository.saveAllAndFlush(Arrays.asList(new Company[]{company1, company2}));
        projectRepository.saveAllAndFlush(Arrays.asList(new Project[]{project1, project2, project3}));
        teamRepository.saveAllAndFlush(Arrays.asList(new Team[]{team1, team2, team3, team4, team5, team6, team7}));
        userRepository.saveAllAndFlush(Arrays.asList(new User[]{user1, user2, user3, user4, user5, user6, user7, user8, user9, user10, user11, user12}));


        // later to preserve original seed uuid integrity

        User user13 = new User();
        Credentials creds13 = new Credentials();
        creds13.setUsername("denwa");
        creds13.setPassword("password");
        user13.setCredentials(creds13);
        Profile profile13 = new Profile();
        profile13.setFirstName("Dennis");
        profile13.setLastName("Drueck");
        profile13.setEmail("dennis@email.com");
        profile13.setPhone("(555) 867-5309");
        user13.setProfile(profile13);
        user13.setActive(true);
        user13.setAdmin(true);
        user13.setStatus("JOINED");

        User user14 = new User();
        Credentials creds14 = new Credentials();
        creds14.setUsername("rajdeep");
        creds14.setPassword("password");
        user14.setCredentials(creds14);
        Profile profile14 = new Profile();
        profile14.setFirstName("Rajdeep");
        profile14.setLastName("Hundal");
        profile14.setEmail("rajdeep@email.com");
        profile14.setPhone("(555) 123-7564");
        user14.setProfile(profile14);
        user14.setActive(true);
        user14.setAdmin(true);
        user14.setStatus("JOINED");

        User user15 = new User();
        Credentials creds15 = new Credentials();
        creds15.setUsername("thomas");
        creds15.setPassword("password");
        user15.setCredentials(creds15);
        Profile profile15 = new Profile();
        profile15.setFirstName("Thomas");
        profile15.setLastName("Tubbs");
        profile15.setEmail("thomas@email.com");
        profile15.setPhone("(555) 222-2222");
        user15.setProfile(profile15);
        user15.setActive(true);
        user15.setAdmin(true);

        User user16 = new User();
        Credentials creds16 = new Credentials();
        creds16.setUsername("martin");
        creds16.setPassword("password");
        user16.setCredentials(creds16);
        Profile profile16 = new Profile();
        profile16.setFirstName("Martin");
        profile16.setLastName("Hu");
        profile16.setEmail("martin@email.com");
        profile16.setPhone("(555) 333-3333");
        user16.setProfile(profile16);
        user16.setActive(true);

        User user17 = new User();
        Credentials creds17 = new Credentials();
        creds17.setUsername("shyam");
        creds17.setPassword("password");
        user17.setCredentials(creds17);
        Profile profile17 = new Profile();
        profile17.setFirstName("Shyam");
        profile17.setLastName("Patel");
        profile17.setEmail("shyam@email.com");
        profile17.setPhone("(555) 444-3333");
        user17.setProfile(profile17);
        user17.setActive(true);
        user17.setAdmin(true);
        user17.setStatus("JOINED");

        User user18 = new User();
        Credentials creds18 = new Credentials();
        creds18.setUsername("antonio");
        creds18.setPassword("password");
        user18.setCredentials(creds18);
        Profile profile18 = new Profile();
        profile18.setFirstName("Antonio");
        profile18.setLastName("Salmeron");
        profile18.setEmail("antonio@email.com");
        profile18.setPhone("(555) 932-1233");
        user18.setProfile(profile18);
        user18.setActive(true);
        user18.setAdmin(true);

        User user19 = new User();
        Credentials creds19 = new Credentials();
        creds19.setUsername("sejo");
        creds19.setPassword("password");
        user19.setCredentials(creds19);
        Profile profile19 = new Profile();
        profile19.setFirstName("Sejo");
        profile19.setLastName("Basic");
        profile19.setEmail("sejo@email.com");
        profile19.setPhone("(555) 215-0156");
        user19.setProfile(profile19);
        user19.setActive(true);
        user19.setAdmin(true);

        announcementRepository.saveAllAndFlush(Arrays.asList(new Announcement[]{announcement6, announcement7, announcement8, announcement9}));
        companyRepository.saveAllAndFlush(Arrays.asList(new Company[]{company3}));
        projectRepository.saveAllAndFlush(Arrays.asList(new Project[]{project4, project5, project6}));
        teamRepository.saveAllAndFlush(Arrays.asList(new Team[]{team8, team9, team10, team11}));
        userRepository.saveAllAndFlush(Arrays.asList(new User[]{user13, user14, user15, user16, user17, user18, user19}));


        user13.setCompanies(new HashSet<Company>(Arrays.asList(company1, company2, company3)));
        user13.setTeams(new HashSet<Team>(Arrays.asList(team8, team10)));
        user13.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement6, announcement8)));

        user14.setCompanies(new HashSet<Company>(Arrays.asList(company1, company2, company3)));
        user14.setTeams(new HashSet<Team>(Arrays.asList(team8, team11)));
        user14.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement6, announcement8, announcement9)));

        user15.setCompanies(new HashSet<Company>(Arrays.asList(company1, company2, company3)));
        user15.setTeams(new HashSet<Team>(Arrays.asList(team8, team11)));
        user15.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement6)));

        user16.setCompanies(new HashSet<Company>(Arrays.asList(company1, company2, company3)));
        user16.setTeams(new HashSet<Team>(Arrays.asList(team8, team11)));

        user17.setCompanies(new HashSet<Company>(Arrays.asList(company1, company2, company3)));
        user17.setTeams(new HashSet<Team>(Arrays.asList(team9, team11)));

        user18.setCompanies(new HashSet<Company>(Arrays.asList(company1, company2, company3)));
        user18.setTeams(new HashSet<Team>(Arrays.asList(team9, team10)));

        user19.setCompanies(new HashSet<Company>(Arrays.asList(company1, company2, company3)));
        user19.setTeams(new HashSet<Team>(Arrays.asList(team9, team10)));
        user19.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement7)));


        announcement6.setTitle("Backend Is Complete");
        announcement6.setMessage("The Java Spring RESTful API backend servlet has been completed. All contributors' feature branches have been merged and pushed to the backend branch. Frontend team should clone the backend branch to a new folder and run the servlet locally to test their React.js client application's endpoint interactions.");
        announcement6.setCompany(company3);
        announcement6.setAuthor(user13);
        announcement6.setDate(Timestamp.valueOf("2023-01-31 09:01:16"));

        announcement7.setTitle("Frontend Is Complete");
        announcement7.setMessage("The React.js client application has been completed. All contributor's feature branches have been merged and pushed to the backend branch. All team members should clone both the frontend and backend branches to separate folders and to run and test the client and server interactions.");
        announcement7.setCompany(company3);
        announcement7.setAuthor(user19);
        announcement7.setDate(Timestamp.valueOf("2023-02-01 11:01:16"));

        announcement8.setTitle("Group Final Project Demo Has Been Scheduled");
        announcement8.setMessage("Please join us on Friday, February 3, 2023 at 11am – 12pm (CST) for the demo of the company portal application. See you all in the Zoom meeting!");
        announcement8.setCompany(company3);
        announcement8.setAuthor(user13);
        announcement8.setDate(Timestamp.valueOf("2023-02-02 13:01:16"));

        announcement9.setTitle("Endpoints I worked on");
        announcement9.setMessage("I worked on createAnnouncement and updateProject endpoints !!");
        announcement9.setCompany(company3);
        announcement9.setAuthor(user14);
        announcement9.setDate(Timestamp.valueOf("2023-02-03 02:05:16"));
        
        company1.getEmployees().addAll(new HashSet<>(Arrays.asList(user13, user14, user15, user17, user18, user19)));
        company2.getEmployees().addAll(new HashSet<>(Arrays.asList(user13, user14, user15, user17, user18, user19)));

        company3.setName("Sprint 11");
        company3.setDescription("Sprint 11 Company");
        company3.setAnnouncements(new HashSet<Announcement>(Arrays.asList(announcement6, announcement7, announcement8, announcement9)));
        company3.setEmployees(new HashSet<User>(Arrays.asList(user13, user14, user15, user16, user17, user18, user19)));
        company3.setTeams(new HashSet<Team>(Arrays.asList(team8, team9, team10, team11)));

        project4.setName("Backend Buildout");
        project4.setDescription("Design and develop the Java Spring REST API backend application and document all endpoints on the wiki.");
        project4.setActive(true);
        project4.setTeam(team8);

        project5.setName("Frontend Buildout");
        project5.setDescription("Design and develop the React.js frontend client application and request API features from the backend team.");
        project5.setActive(true);
        project5.setTeam(team9);

        project6.setName("Group Final Demo");
        project6.setDescription("Demo the frontend and backend applications.");
        project6.setActive(true);
        project6.setTeam(team10);

        team8.setName("Backend");
        team8.setDescription("Rajdeep, Martin, Dennis & Thomas");
        team8.setCompany(company3);
        team8.setUsers(new HashSet<User>(Arrays.asList(user13, user14, user15, user16)));
        team8.setProjects(new HashSet<Project>(Arrays.asList(project4, project6)));

        team9.setName("Frontend");
        team9.setDescription("Antonio, Sejo & Shyam");
        team9.setCompany(company3);
        team9.setUsers(new HashSet<User>(Arrays.asList(user17, user18, user19)));
        team9.setProjects(new HashSet<Project>(Arrays.asList(project5, project6)));

        team10.setName("Night Owls");
        team10.setDescription("Dennis, Shyam, Antonio & Sejo");
        team10.setCompany(company3);
        team10.setUsers(new HashSet<User>(Arrays.asList(user13, user14, user18, user19)));

        team11.setName("Early Birds");
        team11.setDescription("Martin, Thomas & Rajdeep");
        team11.setCompany(company3);
        team11.setUsers(new HashSet<User>(Arrays.asList(user14, user15, user16, user17)));


        announcementRepository.saveAllAndFlush(Arrays.asList(new Announcement[]{announcement6, announcement7, announcement8, announcement9}));
        companyRepository.saveAllAndFlush(Arrays.asList(new Company[]{company1, company2, company3}));
        projectRepository.saveAllAndFlush(Arrays.asList(new Project[]{project4, project5, project6}));
        teamRepository.saveAllAndFlush(Arrays.asList(new Team[]{team8, team9, team10, team11}));
        userRepository.saveAllAndFlush(Arrays.asList(new User[]{user13, user14, user15, user16, user17, user18, user19}));

    }

}