import { motion } from 'framer-motion';
import { FaUserShield, FaUserPlus, FaMoneyCheckAlt, FaChartLine, FaUsers, FaChalkboardTeacher, FaSignOutAlt, FaRobot } from 'react-icons/fa';

const services = [
	{
		icon: <FaUserShield className="text-[#4efb9f] text-3xl mb-2" />,
		title: 'HR Setup & Compliance',
		points: [
			'HR policy design and implementation',
			'Employee handbook creation',
			'Statutory compliance (PF, ESI, Shops & Establishments, Gratuity, etc.)',
			'Drafting employment contracts and letters',
			'HR audits and process alignment',
		],
	},
	{
		icon: <FaUserPlus className="text-[#00ffcc] text-3xl mb-2" />,
		title: 'Hiring & Onboarding',
		points: [
			'End-to-end recruitment support',
			'Job descriptions and role clarity',
			'Screening and scheduling',
			'Offer letter generation',
			'Structured onboarding processes',
			'Background verification coordination',
		],
	},
	{
		icon: <FaMoneyCheckAlt className="text-[#4efb9f] text-3xl mb-2" />,
		title: 'Payroll & HR Operations',
		points: [
			'Payroll processing',
			'Salary structuring and CTC breakdowns',
			'Leave & attendance tracking systems',
			'Reimbursements and F&F settlement',
			'Payroll compliance (TDS, PF, ESI, PT, etc.)',
		],
	},
	{
		icon: <FaChartLine className="text-[#00ffcc] text-3xl mb-2" />,
		title: 'Performance Management',
		points: [
			'Setting up KRAs & KPIs',
			'Appraisal cycles and review frameworks',
			'360-degree feedback systems',
			'Performance improvement plans (PIPs)',
			'Growth path and promotion structures',
		],
	},
	{
		icon: <FaUsers className="text-[#4efb9f] text-3xl mb-2" />,
		title: 'Employee Engagement & Culture Building',
		points: [
			'Team-building games and HR-led bonding activities',
			'Birthday/anniversary celebrations',
			'Pulse surveys and feedback loops',
			'Employee recognition programs',
			'Monthly HR reports and health check-ins',
		],
	},
	{
		icon: <FaChalkboardTeacher className="text-[#00ffcc] text-3xl mb-2" />,
		title: 'Trainings & Development',
		points: [
			'Soft skills training (communication, collaboration, etc.)',
			'Leadership & managerial workshops',
			'HR policies & compliance awareness sessions',
			'Custom L&D programs based on team needs',
		],
	},
	{
		icon: <FaSignOutAlt className="text-[#4efb9f] text-3xl mb-2" />,
		title: 'Exit Management',
		points: [
			'Resignation handling and exit interviews',
			'Clearance processes',
			'Documentation & compliance',
			'Knowledge transfer facilitation',
			'Retention strategy analysis',
		],
	},
	{
		icon: <FaRobot className="text-[#00ffcc] text-3xl mb-2" />,
		title: 'HR Tech & Automation',
		points: [
			'HRMS tool recommendations and setup',
			'Digitizing attendance, leaves, documents',
			'Templates & trackers for processes',
			'Analytics dashboards and reporting',
		],
	},
];

const sectionVariants = {
	hidden: { opacity: 0, y: 60 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const cardVariants = {
	rest: { scale: 1, boxShadow: '0 2px 12px 0 rgba(0,0,0,0.10)' },
	hover: { scale: 1.05, boxShadow: '0 8px 32px 0 rgba(78,251,159,0.25)' },
};

const Service = () => {
	return (
		<motion.section
			className="py-20 px-4 min-h-screen"
			style={{ background: 'var(--theme-bg)', color: 'var(--theme-text)' }}
			variants={sectionVariants}
			initial="hidden"
			whileInView="visible"
			viewport={{ once: true, amount: 0.3 }}
			id="service"
		>
			<div className="max-w-6xl mx-auto text-center mb-12">
				<motion.h2 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight" style={{ color: 'var(--theme-purple)' }}>
					Our Services – <span style={{ color: 'var(--theme-yellow)' }}>QuikHR</span>
				</motion.h2>
				<motion.p className="text-lg font-semibold mb-2" style={{ color: 'var(--theme-purple)' }}>
					Complete HR. One Retainer. Zero Headaches.
				</motion.p>
				<motion.p className="max-w-2xl mx-auto" style={{ color: '#555' }}>
					Whether you’re just starting out or scaling fast, QuikHR becomes your extended HR team—taking care of everything people-related while you grow your business.
				</motion.p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-6xl mx-auto">
				{services.map((service, idx) => (
					<motion.div
						key={service.title}
						className="rounded-2xl p-6 flex flex-col items-start shadow-md border transition-colors group cursor-pointer"
						style={{ background: 'var(--theme-gray)', borderColor: 'var(--theme-purple)' }}
						variants={cardVariants}
						initial="rest"
						whileHover="hover"
						animate="rest"
						whileTap="hover"
						transition={{ type: 'spring', stiffness: 300 }}
					>
						{service.icon}
						<h3 className="text-xl font-bold mb-3 group-hover:text-[var(--theme-yellow)] transition-colors duration-300" style={{ color: 'var(--theme-purple)' }}>
							{idx + 1}. {service.title}
						</h3>
						<ul className="text-sm space-y-2 pl-4 list-disc">
							{service.points.map((point, i) => (
								<li key={i} className="hover:text-[var(--theme-purple)] transition-colors duration-200">{point}</li>
							))}
						</ul>
					</motion.div>
				))}
			</div>
		</motion.section>
	);
};

export default Service;
