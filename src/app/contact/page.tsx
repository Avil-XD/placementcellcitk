import InfoCard from "@/components/common/infocard";
import teamData from "@/data/teamdata.json";

export default function Page() {
  const [firstMember, ...otherMembers] = teamData.TPOAndFacultyMembers;

  return (
    <main className="min-h-screen p-5 space-y-5 bg-gray-50 dark:bg-gray-900">
      <section className="px-5 sm:px-16 py-5 space-y-5 bg-gradient-to-r from-blue-100 to-teal-200 dark:from-blue-900/50 dark:to-teal-900/50 rounded-lg shadow-lg">
        <h1 className="text-5xl text-center font-bold text-gray-800 dark:text-white">
          TPO & Faculty Members
        </h1>
        <h2 className="text-gray-700 dark:text-gray-300 max-w-4xl mx-auto text-center leading-relaxed">
          For comprehensive details regarding placement and training opportunities, please feel free to reach out to the Training and Placement Officer (TPO) or any of the faculty members listed below. They will be glad to assist you with any inquiries or guidance you may need.
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {otherMembers.map((member) => (
            <InfoCard
              key={member.email}
              imageUrl={member.imageUrl}
              altText={member.altText}
              name={member.name}
              role={member.role}
              email={member.email}
              linkedinUrl={member.linkedinUrl}
              phone={member.phone}
            />
          ))}
        </div>
      </section>

      <section className="px-5 sm:px-16 py-5 space-y-5 bg-gradient-to-r from-blue-100 to-teal-200 dark:from-blue-900/50 dark:to-teal-900/50 rounded-lg shadow-lg">
        <h1 className="text-5xl text-center font-bold text-gray-800 dark:text-white">
          Student Co-ordinators
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          {teamData.StudentCoordinators.map((member) => (
            <InfoCard
              key={member.email}
              imageUrl={member.imageUrl}
              altText={member.altText}
              name={member.name}
              role={member.role}
              email={member.email}
              linkedinUrl={member.linkedinUrl}
              phone={member.phone}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
