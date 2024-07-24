import ReachCard from "@/components/common/reachcard";
import ReachCardVarTwo from "@/components/common/reachcardvartwo";

export default function Page() {
  return (
    <main className="min-h-screen py-5 px-10 space-y-5">
      <h1 className="text-4xl font-bold text-center">How to Reach Us</h1>
      <section className="flex flex-col gap-5 border-2 border-teal-500 py-7 rounded-lg">
        <ReachCard
          image="/train.jpg"
          description="The nearest railway station to CIT Kokrajhar is the Kokrajhar Railway Station. It is situated just 10 kilometers away from the institute premises. The station serves as a vital gateway for students, faculty, and visitors alike."
          subtitle="mfks"
          title="Railways"
        />
        <ReachCardVarTwo
          image="/plane.jpg"
          description=""
          subtitle="mfks"
          title="Airways"
        />
        <ReachCard
          image="/roadway.jpeg"
          description="The nearest major highway to CIT Kokrajhar is NH27 (National Highway 27). This well-connected highway plays a crucial role in connecting various regions and provides a convenient route to reach CIT Kokrajhar."
          subtitle=""
          title="Roadways"
        />
      </section>
    </main>
  );
}
