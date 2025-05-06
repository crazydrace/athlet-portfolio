const images = [
  "https://www.onlinegambling.com/news/wp-content/uploads/2020/03/Khabib-Nurmagomedov-Russia-scaled.jpg",
  "https://static0.givemesportimages.com/wordpress/wp-content/uploads/2022/01/21_06_26_80a11571fd05d8252310ce68143d44d3_690-1.jpg",
  "https://th.bing.com/th/id/OIP.F3TtcczuC4jUqaM1xAxADgHaE7?cb=iwp1&rs=1&pid=ImgDetMain",
  "https://s.yimg.com/uu/api/res/1.2/Qw3ZDqH2kPaRGP93IzJfig--~B/dz00NDM3O2g9Mjk1OTthcHBpZD15dGFjaHlvbg--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2018-10/ee88aaf0-ca3d-11e8-b3fe-09a7df0b6f82",
  "https://i.pinimg.com/originals/f5/d7/c6/f5d7c624cbf12d0ac303747d1de8288f.jpg",
  "https://th.bing.com/th/id/OIP.vnCKluMHxmsgCVW1xRKJLAHaEo?cb=iwp1&rs=1&pid=ImgDetMain",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-12 my-12">
      <h2 className="text-3xl font-bold text-center mb-8">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition"
          >
            <img
              src={image}
              alt={`Khabib Nurmagomedov ${index + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
