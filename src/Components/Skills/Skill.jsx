import { skills } from '../../assets/Data'

export default function Skills() {
  return (
    <section id="skills" className="max-w-5xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-bold text-ink dark:text-paper mb-6">Skills</h2>
      <div className="flex flex-wrap gap-2.5">
        {skills.map((skill) => (
          <span key={skill} className="rounded-full bg-ink dark:bg-paper text-paper dark:text-ink text-sm font-medium px-4 py-2">
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}