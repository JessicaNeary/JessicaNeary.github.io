
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('blogs').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('blogs').insert({id: 1, date: '28th September 16', title: 'Reflection', text:
					'<p>
						My first impressions of the EDA experience are overwhelmingly positive. I have studied Computer Science at University previously, so at this stage my opinions are mostly as a comparison to the traditional tertiary route. Initally EDA feels much more supportive and personal, with far smaller class sizes and a tutor-student ratio that will no doubt be a strong influence on my learning experience. I have previously been a very individual learning, preferring plugging my ipod in and getting on with the work to group discussion. While this does have it\'s advantages I feel it has hindered my learning overall. My first year at Uni I had several friends doing the same courses as me who I could clarify instructions and seek help with. Second year this changed, and I frequently found myself stuck and unwilling to reach out to busy lecturers or student tutors busy with their own assignements. With EDA I have already been using Slack to communicate with my cohort and ensure I am on track, and whilst I have had no major road blocks so far, I know when I do help will not be far away.
					</p>

		      <p>
						I was initally quite nervous that I would struggle with the workload in the later phases and get overwhelmed, but now knowing that I can retake a phase with no financial penalty, I am feeling much more confident. Worrying about failing and wasting my course fees was a huge cause of stress in my previous studies, so it is a relief to know I no longer need to clutter my head with financial fears and can focus entirely on my learning. My other concern is the typical woe of the socially inept - will I be able to interact with these new people without coming across as a weirdo, or worse, a snob? Will I be able to communicate my ideas clearly and understand those around me? While this does add a few nerves, I am overall excited to be put out of my comfort zone and challenged to work with people I don\'t know, as these are skills I know I lack and need to work on. The emphasis on the EDA culture assures me that this will be a welcoming environment and one that will get me ready for the social and collaborative aspects of the workforce.
					</p>

		      <p>
						I am excited to continue my coding education and become a Full-Stack Web Developer, and can\'t wait to start making some cool programs.
					</p>'
				}),
				knex('blogs').insert({id: 2, date: '6th October 16', title: 'Emotional Intelligence', text:
					'<h4>
						What learnings did you take from the chapter?
			    </h4>

					<p>
						I learnt that mindfulness and meditation can improve your attention and memory. I have always had a very poor memory, so learning that I can improve this is nice. Most of the concepts in the first chapter were already familiar to me, as having GAD I have spent some time prior to the course exploring my mind and the ways in which behavior can be changed. However was good reading the example studies in the chapter and seeing that these ideas can be backed up by science and aren\'t just \'hippie psychobabble\'.
					</p>


					<h4>
			      How did you find the two minutes of mindfulness?
			    </h4>

					<p>
						That two minutes wasn\'t enough. I have attempted meditation in the past, and find it takes me at least 5 minutes to get myself to stop thinking about all the things I have to do and become really present in the moment. I know the more I practise this the faster I\'ll be able to get into the right mindset, at which point two minutes might be all I need, but as a beginner I did not feel much better after just two minutes.
					</p>'
				});
				knex('blogs').insert({id: 3, date: '16th October 2016', title: 'Meditation Process', text:
					'<h5 class="q">How did the \'process over product\' concept affect the way you tackled the site redesign and rebuild?</h5>
					<p>I used it to rein in my perfectionist tendancies during the design period, reminding myself that how the site functions was more important than how it looked at this stage. I also kept the elements simple and familiar so that, rather than getting distracted by features like dropdown menus, I would have time to focus on getting the responsiveness of the site working well, and understanding how I did that. It also meant that my blog page design is left looking slightly different than my wireframe until I get around to figuring out how to fix it.
					</p>

					<h5 class="q">What did you think about meditation before reading chapter 2?</h5>
					<p>I view it positively and have tried it myself in the past. I have trouble remembering to do it often enough to notice much difference, but I believe in it\'s benefits.
					</p>

					<h5 class="q">What new things have you learnt about meditation?</h5>
					<p>
						I learnt that it can improve your immunity, which is surprising, but I suppose fits with the old adage of \'health mind, healthy body\'
					</p>

					<h5 class="q">Did any of the suggested meditation techniques stand out to you?</h5>
					<p>
						The acting with intention stood out to me. I have heard previously that you are supposed to acknowledge distractions, then let them go while meditating. Now I will try applying an intention to my meditative sessions, and allow myself to itch while being aware of the intention behind it.
					</p>

					<h5 class="q">Any other musings?</h5>
		      <p>
						While it is interesting to learn how meditation works, I think my barrier is more the \'habit\' side of this particular habit. I need to get into the habit of meditating more, and remember to try it every day if possible.
					</p>'
				});
      ]);
    });
};
