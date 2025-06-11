import { useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const faqs = [
	{
		question: 'What exactly does “HR on retainer” mean?',
		answer:
			'It means you get a full suite of HR services—just like an internal HR team—without hiring one. We manage all your HR needs on a monthly subscription, scaled to your team size.',
	},
	{
		question: 'What if we already have an internal HR person?',
		answer:
			'No problem! We can either fully manage HR or work alongside your existing team to add structure, strategy, or tech support.',
	},
	{
		question: 'What’s included in the monthly retainer?',
		answer:
			'Everything—from hiring, payroll, policy creation, compliance, performance management, team engagement, to HR tech support. We become your virtual HR department.',
	},
	{
		question: 'How quickly can we get started?',
		answer:
			'Within 3–5 working days. After an initial consultation, we set up a plan, onboard your team, and begin with priority actions like compliance or hiring.',
	},
	{
		question: 'Is there a lock-in period or contract?',
		answer:
			'No long-term lock-ins. We work on a monthly retainer model and believe in delivering value to earn your trust, not force it.',
	},
	{
		question: 'Will we get a dedicated point of contact?',
		answer:
			'Yes! You’ll have a dedicated HR manager supported by our internal experts, ensuring consistency and accountability.',
	},
	{
		question: 'Can you help us with specific HR tasks like drafting policies or conducting appraisals only?',
		answer:
			'While we focus on end-to-end support, we do take up one-time projects based on availability. Let\'s talk and understand your needs.',
	},
	{
		question: 'What kind of tools or automation do you bring in?',
		answer:
			'We help implement simple, cost-effective HRMS platforms for attendance, leaves, performance tracking, and more—based on your current maturity and needs.',
	},
	{
		question: 'Do you support remote or hybrid teams?',
		answer:
			'Absolutely! In fact, many of our clients operate remotely. We tailor processes and tools to suit remote-first cultures.',
	},
];

const FAQ = () => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx);
	};

	return (
		<section
			className="min-h-[80vh] py-16 px-4 flex flex-col items-center animate-fadeInUp"
			style={{
				background: 'var(--theme-bg)',
				color: 'var(--theme-text)',
			}}
		>
			<Fade
				direction="up"
				triggerOnce
				cascade
				damping={0.15}
				fraction={0.2}
				style={{ transitionTimingFunction: 'ease-in-out' }}
			>
				<h2
					className="text-4xl font-extrabold mb-8 drop-shadow-lg text-center"
					style={{ color: 'var(--theme-purple)' }}
				>
					Frequently Asked Questions
				</h2>
				<div className="w-full max-w-2xl mx-auto">
					{faqs.map((faq, idx) => (
						<Slide
							direction="up"
							triggerOnce
							key={idx}
							fraction={0.2}
							style={{ transitionTimingFunction: 'ease-in-out' }}
						>
							<div
								className={`mb-4 rounded-xl shadow-lg border transition-transform duration-300 hover:scale-[1.02] group ${
									openIndex === idx ? 'ring-2' : ''
								}`}
								style={{
									borderColor: 'var(--theme-purple)',
									background:
										openIndex === idx
											? 'var(--theme-yellow)'
											: 'var(--theme-gray)',
								}}
							>
								<button
									className="w-full flex justify-between items-center px-6 py-5 text-lg font-semibold text-left focus:outline-none transition-colors duration-200 group-hover:text-[var(--theme-purple)]"
									onClick={() => handleToggle(idx)}
									aria-expanded={openIndex === idx}
									aria-controls={`faq-answer-${idx}`}
									style={{
										color:
											openIndex === idx
												? 'var(--theme-purple)'
												: 'var(--theme-text)',
									}}
								>
									<span>{faq.question}</span>
									<span
										className={`ml-4 transform transition-transform duration-300 ${
											openIndex === idx ? 'rotate-180' : 'rotate-0'
										}`}
										style={{ color: 'var(--theme-purple)' }}
									>
										▼
									</span>
								</button>
								<div
									id={`faq-answer-${idx}`}
									className={`overflow-hidden transition-all duration-500 px-6 ${
										openIndex === idx
											? 'max-h-40 py-3 opacity-100'
											: 'max-h-0 py-0 opacity-0'
									}`}
									style={{
										background:
											openIndex === idx
												? 'rgba(124,58,237,0.05)'
												: 'transparent',
									}}
								>
									<p
										className="text-base leading-relaxed"
										style={{ color: 'var(--theme-text)' }}
									>
										{faq.answer}
									</p>
								</div>
							</div>
						</Slide>
					))}
				</div>
			</Fade>
		</section>
	);
};

export default FAQ;
