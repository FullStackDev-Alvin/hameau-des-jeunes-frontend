import React from "react";

const lifeStories = [
  {
    title: "Early Life",
    content:
      "Born in Germany, Father Hermann Schulz embodied service from a young age. Guided by humility and deep spiritual roots, he was destined for impact.",
  },
  {
    title:"School and studies",
    content:"In March 1945 he had to leave his homeland. Holding his father's hand, he witnessed his father die while fleeing. Later, he first went to school in Emlichheim (County of Bentheim), where he spent his elementary school years. His mother wanted him to go to a high school. But a Catholic seminary alone would have cost as much money as she had available for herself and her two sons together. That's when Hermann Schulz's mother discovered a Lithuanian grammar school (in Lampertheim). Half of the lessons there were in German and the other half in Lithuanian. Here, Father Hermann Schulz was not exactly a model pupil and his move to Italy was almost an escape. He went to a school of the Salesians of Don Bosco in Italy because he had heard that there was less to learn here. This was not true at all. This is how Father Schulz came across the Salesian Order of Faith, which he was already very enthusiastic about at the time. The training with the Salesians took longer than usual. Because between school and the studies of theology, philosophy and pedagogy there were only three years of internship. In 1968, Hermann Schulz was ordained a priest and was now himself a priest of the Salesian Order."
  },
  {
    title:"The first work as a priest",
    content:"At first, Father Hermann Schulz worked for three years at the Lithuanian high school, where he was once a student. There he performed the functions of chaplain, boarding school director and sports teacher."
  },
  {
    title:"In Brazil",
    content:"From there he came to Sao Paulo in Brazil. In the years from 1923 to 1928 there was famine in Lithuania, which is why many Lithuanians had emigrated to Brazil. In Sao Paulo, however, the noise was deafening and chaotic traffic conditions. The time there affected him very much and weighed heavily on him. 'I couldn't stay there,'Father Schulz recalls. Then he went to the Amazon twice and got to know the huge country of Brazil. In view of the rural exodus, which increased the misery in the cities, he tried to convince people to stay in the countryside and to develop it and himself. For Father Schulz it was clear. He wanted to stay in the mission, but please not in a big city. Haiti, India and Rwanda were proposed to him. 'If you want to go to a country – without big cities – where the need is really huge, then go to Rwanda,' his superior suggested to him. 'So for me it was the other way around: some did rural exodus, I did urban exodus."
  },
  {
    title:"In Rwanda",
    content:"ather Schulz was fascinated by the first impressions in Rwanda (1979), because it was the pure 'African' attitude to life and the mind of the people that Father Schulz in Brazil immediately appealed to him. Communication was not easy at first, because he did not speak Kinyarwanda at first. Although French was the official language, the ordinary people spoke only their mother tongue. In the beginning, Father Schulz lived in Musha, a parish in the countryside, from where he took walks again and again to get in touch with the people. After a short time, he always had a whole crowd of children around him. He played with the children and talked to the shepherds, which were the best language exercises. The people were very friendly despite their poverty. Bonna Tumuhayirwe's little sister in particular was one of his language teachers, with whom he trained pronunciation. When he told the children after some time that he would like to go on a trip with them, everyone came. 'Where did you get your provisions?' he asked. But the children had nothing. Everyone went out together, the children barefoot. On an old bicycle, he had a canteen and a small bag of bananas. Together they set off. Around noon, everyone sat together by a lake. Only Bonna's little sister had a piece of bread in a cloth with her. Bananas and bread were divided. 'All this impressed me very much,' Father Schulz recalls. In his first At masses he saw sick people again and again. It was then that he realized that he had to help with more than just the Holy Scriptures."
  },
  {
    title:"Parish in Musha",
    content:"In Kigali, where he worked with young people for some time, he got an overview of how the Rwandan language is structured in four months of language course. After a year, he came back to Musha. In the meantime, he had organized tents. At that time, the parish of Musha consisted only of the house in which the priests lived. There was no church yet. The so-called main church consisted only of a few piles with a tin roof. In addition, there were also so-called outer churches: meeting places of Christians under trees. Father Hermann Schulz set up his tents here. He had organized himself to the extent that he could also care for the sick, the elderly with blankets, possibly also with clothes. In Rwanda, giving a coat to an elderly person is a huge gift. Because when it comes to the evening and at night, it can get very cold, and older people in particular need something warm to wear or a blanket to sleep. He was often out and about with the young people. One boy said to him, 'It's so much fun to help other people. But help us too. We are now helping our people. But when we're old, we'll be just as bad.' Shortly afterwards, Father Schulz received his first site from the parish. The young people pitched in vigorously. The area was made arable. Fields were planted, the first vegetables were sold and with their little pocket money the young people bought two piglets, which were kept next to the parish building. In the end, it turned out to be fortunate that a confrere disliked the fact that the piglets were kept on the parish grounds. That's when Father Hermann Schulz came up with the idea of doing more than just cultivating a few fields. The pigs were housed nearby, which made it necessary to build permanent buildings."
  },
    {
    title:"The Youth Village Is Created",
    content:"Finally, in 1982, the partnership between Rhineland-Palatinate and Rwanda was established. Father Hermann met Bernhard Vogel, the then Prime Minister of Rhineland-Palatinate (1976 to 1988) during his official state visit to Rwanda. Father Schulz was also the official pastor of the German community in Rwanda. Whenever a state visit came from Germany, Father Hermann was also invited by the German embassy. An exchange of letters followed. In the end, Father Hermann received 12,000 marks, which was used to build a building for the young people and the pigsty. After a lot had been created with the money, he received 42,000 marks in another application. Further buildings were built. The Bundeswehr helped and the first private donations arrived. Aid from Germany, Italy, Lithuania, the USA, Canada and Brazil."
  },
    {
    title:"1994 and the period after",
    content:"In 1994, a civil war broke out in Rwanda; a genocide that devastated the country, cost the lives of hundreds of thousands of people and also destroyed the youth village. Father Hermann Schulz survived and left the country. However, he returned a short time later to build up a youth and orphanage village. Many people and groups supported him. Since then, the youth and orphan village has been developing. Several hundred children have found a new home here and are given opportunities for school and vocational training. After Father Schulz experienced the hardship of many children and young people in Lithuania and got back the once expropriated land of his grandparents, he also built an international youth meeting center and a youth center for neglected children and young people near Klaipeda (the former Memel)."
  },
  {
    title: "Mission in Rwanda",
    content:
      "In Rwanda, his mission took root. Through faith, education, and selflessness, he transformed countless lives — especially the youth.",
  },
  {
    title: "Legacy",
    content:
      "His legacy is etched into the hearts of those he served. His values continue to guide the next generation of compassionate leaders.",
  },
];

const FatherHermannBlog = () => {
  return (
    <div className="font-serif text-gray-900 bg-bg leading-relaxed">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center text-center bg-gradient-to-br from-primary to-indigo-900 text-white px-6">
        <div className="max-w-2xl flex flex-col justify-center items-center gap-[5px]">
          <img src="/father_hermann.jpg" alt="" className="rounded-full"/>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Father Hermann Schulz</h1>
          <p className="text-xl font-light">A life of purpose, love, and transformation.</p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Who Was He?</h2>
        <p className="text-lg md:text-xl text-gray-700">
          More than a missionary — Father Hermann was a mentor, builder of character, and spiritual father.
          His work still echoes in the classrooms and hearts he touched across Rwanda.
        </p>
      </section>

      {/* Life Stories */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-16">
          {lifeStories.map((story, index) => (
            <div key={index}>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{story.title}</h3>
              <p className="text-base md:text-lg text-gray-800">{story.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-primary text-white text-center px-4">
        <blockquote className="max-w-3xl mx-auto text-xl md:text-2xl italic font-light">
          "I discovered the locals were both illiterate and jobless. When I asked what I could do to help them, they answered that they wanted a place to be educated and learn a trade. So that’s what I gave them – starting with the Youth Village in 1968 and progressing to a separate vocational high school in 2008."
        </blockquote>
        <p className="mt-6 font-semibold text-lg">– Father Hermann Schulz</p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-200">
        <p className="text-gray-600">© In loving memory of Father Hermann Schulz</p>
      </footer>
    </div>
  );
};

export default FatherHermannBlog;
