"use client";

export default function ResumePage() {
  return (
    <div className="w-full max-w-5xl mx-auto bg-white dark:bg-zinc-900 rounded-lg shadow-xl p-8 md:p-12">
      {/* Header */}
      <div className="border-b-4 border-red-600 dark:border-red-400 pb-6 mb-8">
        <h1 className="text-5xl font-bold text-red-600 dark:text-red-400 mb-4">
          MADUGULA ADHEESH
        </h1>
        <div className="flex flex-wrap gap-4 text-sm text-zinc-600 dark:text-zinc-400">
          <span>+65 85187644</span>
          <span>madugulaadheesh@gmail.com</span>
          <a
            href="https://www.linkedin.com/in/adheesh-madugula/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>

      {/* Profile */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          PROFILE
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
          First-year Applied Computing student specializing in FinTech, equipped with strong skills in programming languages, and a keen understanding of financial technology concepts. Highly adaptable and results-driven, with proven leadership, teamwork, and problem-solving abilities. Passionate about leveraging technology to create innovative financial solutions and contribute effectively across technical, analytical, and business domains.
        </p>
      </section>

      {/* Technical Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          TECHNICAL SKILLS
        </h2>
        <div className="space-y-3 text-zinc-700 dark:text-zinc-300">
          <p><strong>Programming Languages:</strong> Python, C, Bash, SQL, VBA<sup>*</sup>, Java<sup>*</sup>, Javascript<sup>*</sup>, HTML/CSS<sup>*</sup></p>
          <p><strong>Frameworks & Systems:</strong> Django<sup>*</sup>, Bootstrap<sup>*</sup>, PHP<sup>*</sup>, MySQL<sup>*</sup>, SharePoint</p>
          <p><strong>Data & Analytics:</strong> Excel, Power BI, Tableau, Data Cleaning, Dashboards</p>
          <p><strong>Tools & Collaboration:</strong> GitHub, Word, PowerPoint, DAW, Agile<sup>*</sup>, Documentation</p>
          <p><strong>Systems & Security:</strong> OS Architecture, TCP/IP, Cybersecurity<sup>*</sup>, Automation<sup>*</sup></p>
          <p><strong>Concepts:</strong> OOP<sup>*</sup>, Data Structures, ClientServer Architecture<sup>*</sup></p>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 italic">(* learning in progress)</p>
        </div>
      </section>

      {/* Soft Skills */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          SOFT SKILLS
        </h2>
        <div className="flex flex-wrap gap-3">
          {["Leadership", "Time Management", "Effective Communication", "Project Management", "Incident Management", "Stakeholder Management"].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-300 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* Work Experience */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          WORK EXPERIENCE
        </h2>
        <div className="space-y-6">
          {/* RSAF */}
          <div className="border-l-4 border-red-600 dark:border-red-400 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Admin Assistant
                </h3>
                <p className="text-lg text-red-600 dark:text-red-400 font-medium">
                  Republic of Singapore Air Force
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 md:mt-0">
                Jul 2023 - May 2025
              </p>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-2 italic">
              Finance department of HQ ACC
            </p>
            <ul className="text-zinc-700 dark:text-zinc-300 mt-2 space-y-1 list-disc list-inside">
              <li>Managed finance and procurement operations using Excel and a next-generation procurement system (NGPS).</li>
              <li>Chairperson of 2 major events that involved over 200 participants and higher officials, including Air Force commander.</li>
            </ul>
          </div>

          {/* SAESL */}
          <div className="border-l-4 border-red-600 dark:border-red-400 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  HS&E Intern
                </h3>
                <p className="text-lg text-red-600 dark:text-red-400 font-medium">
                  Singapore Aero Engine Services Pte Ltd
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 md:mt-0">
                Oct 2022 - Feb 2023
              </p>
            </div>
            <ul className="text-zinc-700 dark:text-zinc-300 mt-2 space-y-1 list-disc list-inside">
              <li>Analyzed safety data using Excel and reporting tools; supported risk mitigation strategies, strengthening analytical and problem-solving skills.</li>
              <li>Updated protocols using Microsoft Publisher and optimized SharePoint site, boosting workflow efficiency by 70%.</li>
            </ul>
          </div>

          {/* DHL */}
          <div className="border-l-4 border-red-600 dark:border-red-400 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Part-time Warehouse Assistant
                </h3>
                <p className="text-lg text-red-600 dark:text-red-400 font-medium">
                  DHL Supply Chain
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 md:mt-0">
                Sep 2021 - Oct 2021
              </p>
            </div>
            <ul className="text-zinc-700 dark:text-zinc-300 mt-2 space-y-1 list-disc list-inside">
              <li>Managed workflows using barcode scanning systems; led a team of 50 workers to meet project deadlines and ensure inventory accuracy.</li>
            </ul>
          </div>

          {/* NTUC */}
          <div className="border-l-4 border-red-600 dark:border-red-400 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Part-time Retail Assistant
                </h3>
                <p className="text-lg text-red-600 dark:text-red-400 font-medium">
                  NTUC FairPrice
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 md:mt-0">
                Mar 2020 - Apr 2020
              </p>
            </div>
            <ul className="text-zinc-700 dark:text-zinc-300 mt-2 space-y-1 list-disc list-inside">
              <li>Supported high-volume operations using inventory management tools; performed accurate stock checks and rotations while adapting quickly to evolving processes.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          EDUCATION
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-red-600 dark:border-red-400 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Bachelor of Science (Honours) in Applied Computing with Specialization in Fintech
                </h3>
                <p className="text-lg text-red-600 dark:text-red-400 font-medium">
                  Singapore Institute Of Technology
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 md:mt-0">
                Sep 2025 - Present
              </p>
            </div>
          </div>

          <div className="border-l-4 border-red-600 dark:border-red-400 pl-4">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-50">
                  Diploma in Aerospace Electronics
                </h3>
                <p className="text-lg text-red-600 dark:text-red-400 font-medium">
                  Temasek Polytechnic
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                  GPA: 3.63 / 4.0
                </p>
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1 md:mt-0">
                Feb 2020 - Apr 2023
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Honors & Awards */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          HONORS & AWARDS
        </h2>
        
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Academic Excellence</h3>
            <ul className="text-zinc-700 dark:text-zinc-300 space-y-1 list-disc list-inside ml-4">
              <li>Director's List - Temasek Polytechnic (2023)</li>
              <li>Edusave Academic Achievement - MOE (2018, 2019, 2022, 2023)</li>
              <li>Edusave Eagles - MOE (2019)</li>
              <li>Edusave Good Progress - MOE (2014, 2018)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Training & Certification</h3>
            <ul className="text-zinc-700 dark:text-zinc-300 space-y-1 list-disc list-inside ml-4">
              <li>SAR Part 147 Basic Training - Lufthansa Training Center (2023)</li>
              <li>Student Leadership - Acorn Training (2018)</li>
              <li>Australian Maths Competition - Proficiency (2018)</li>
              <li>Aerospace & Drone Technologies Masterclass - Ep-Tec (2016 - 2018)</li>
              <li>Young Engineer Award Bronze (2016)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Military Recognition</h3>
            <ul className="text-zinc-700 dark:text-zinc-300 space-y-1 list-disc list-inside ml-4">
              <li>Outstanding Serviceman of the Year - RSAF (2024)</li>
              <li>Best Airman Award - RSAF (2023)</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50 mb-2">Music & Performance</h3>
            <ul className="text-zinc-700 dark:text-zinc-300 space-y-1 list-disc list-inside ml-4">
              <li>Grade 5 Theory Distinction - ABRSM (2025)</li>
              <li>Grade 8 Performance Merit - Rockschool (2022)</li>
              <li>Gold Award - ICMDA Competition (2022)</li>
              <li>Gold Award - Cristofori Got Talent (2019)</li>
              <li>Performer - Vasantham Channel (2019)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Co-Curricular Activities */}
      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400 mb-4 border-b border-zinc-300 dark:border-zinc-700 pb-2">
          CO-CURRICULAR ACTIVITIES
        </h2>
        <div className="flex flex-wrap gap-3">
          {[
            "Certified Electric/Acoustic Guitar - Head of NCC Air Boys Unit Trainer",
            "Music Band Leader",
            "YouTube Content Creator",
            "School Ambassador",
            "Community Service Volunteer",
            "Cricket & Badminton Player"
          ].map((activity, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full text-sm"
            >
              {activity}
            </span>
          ))}
        </div>
      </section>
    </div>
  );
}

