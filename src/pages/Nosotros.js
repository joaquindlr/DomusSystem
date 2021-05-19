const Nosotros = () => {
  return (
    <>
      <div
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          display: "grid",
          placeItems: "center",
          backgroundColor: "#f2f2f2",
          paddingTop: "2rem",
        }}
      >
        <div
          className="rounded-3 py-5 shadow px-5 text-center "
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
          }}
        >
          <h2>¿Quienes somos?</h2>
          <p className="fs-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
            libero ornare, fermentum ipsum ut, varius ligula. Aliquam fermentum
            eros vitae diam maximus volutpat. Morbi pharetra libero a metus
            scelerisque rhoncus. Pellentesque et commodo sem, in lacinia erat.
            Nullam sit amet vestibulum purus. Aenean eleifend felis non interdum
            sodales. Praesent pharetra odio non scelerisque vestibulum. Integer
            pretium diam in sapien tincidunt consequat. In porttitor libero sit
            amet elementum lacinia. Duis a gravida mauris. Vivamus tortor risus,
            faucibus eget commodo vitae, efficitur a tellus. Donec risus est,
            pellentesque at neque a, lacinia ornare elit. Nullam in bibendum
            quam, et pulvinar metus.
          </p>
          <p className="fs-5 pt-1">
            Pellentesque diam libero, tempor non vehicula sed, cursus nec leo.
            Vestibulum vitae sapien fermentum, pretium felis et, condimentum
            risus. Morbi id sem eget diam tincidunt pulvinar. Mauris vulputate,
            lorem ultricies interdum fermentum, massa nunc vehicula lorem, at
            ultrices tellus nisl eu purus. Quisque eleifend mauris mauris, ac
            fringilla sapien placerat eget. Donec vulputate, risus quis lacinia
            venenatis, felis nisl pulvinar metus, vel gravida urna magna sit
            amet ligula. Duis vulputate orci a faucibus tincidunt.
          </p>
          <h2 className="pt-5">¿Porque elegirnos?</h2>
          <p className="fs-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et
            libero ornare, fermentum ipsum ut, varius ligula. Aliquam fermentum
            eros vitae diam maximus volutpat. Morbi pharetra libero a metus
            scelerisque rhoncus. Pellentesque et commodo sem, in lacinia erat.
            Nullam sit amet vestibulum purus. Aenean eleifend felis non interdum
            sodales. Praesent pharetra odio non scelerisque vestibulum. Integer
            pretium diam in sapien tincidunt consequat. In porttitor libero sit
            amet elementum lacinia. Duis a gravida mauris. Vivamus tortor risus,
            faucibus eget commodo vitae, efficitur a tellus. Donec risus est,
            pellentesque at neque a, lacinia ornare elit. Nullam in bibendum
            quam, et pulvinar metus.
          </p>
          <h2 className="pt-5">¿Donde estamos?</h2>
          <div className="d-md-flex">
            <div>
              <p className="fs-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                et libero ornare, fermentum ipsum ut, varius ligula. Aliquam
                fermentum eros vitae diam maximus volutpat. Morbi pharetra
                libero a metus scelerisque rhoncus. Pellentesque et commodo sem,
                in lacinia erat. Nullam sit amet vestibulum purus. Aenean
                eleifend felis non interdum sodales. Praesent pharetra odio non
                scelerisque vestibulum. Integer pretium diam in sapien tincidunt
                consequat. In porttitor libero sit amet elementum lacinia. Duis
                a gravida mauris. Vivamus tortor risus, faucibus eget commodo
                vitae, efficitur a tellus. Donec risus est, pellentesque at
                neque a, lacinia ornare elit. Nullam in bibendum quam, et
                pulvinar metus.
              </p>
              <p className="fs-5 ">
                Pellentesque diam libero, tempor non vehicula sed, cursus nec
                leo. Vestibulum vitae sapien fermentum, pretium felis et,
                condimentum risus. Morbi id sem eget diam tincidunt pulvinar.
                Mauris vulputate, lorem ultricies interdum fermentum, massa nunc
                vehicula lorem, at ultrices tellus nisl eu purus. Quisque
                eleifend mauris mauris, ac fringilla sapien placerat eget. Donec
                vulputate, risus quis lacinia venenatis, felis nisl pulvinar
                metus, vel gravida urna magna sit amet ligula. Duis vulputate
                orci a faucibus tincidunt.
              </p>
            </div>
            <img
              style={{ height: "25rem", width: "25rem" }}
              src="https://i.ibb.co/Qb1QdCy/marcador-google.png"
              className="d-none d-lg-block"
            />
            <img
              style={{ height: "15rem", width: "15rem" }}
              src="https://i.ibb.co/Qb1QdCy/marcador-google.png"
              className="d-lg-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;
