function startSim() {
  var Eng = Matter.Engine,
    Ren = Matter.Render,
    Evt = Matter.Events,
    MCon = Matter.MouseConstraint,
    Mou = Matter.Mouse,
    Wld = Matter.World,
    Bdy = Matter.Bodies;

  var eng = Eng.create(),
    wld = eng.world;

  var contEl = document.querySelector(".pill-container");
  var contW = contEl.clientWidth;
  var contH = contEl.clientHeight;

  var ren = Ren.create({
    element: contEl,
    engine: eng,
    options: {
      width: contW,
      height: contH,
      pixelRatio: 2,
      background: "rgba(0, 0, 0, 1)",
      wireframes: false,
    },
  });

  var grd = Bdy.rectangle(contW / 2 + 160, contH + 80, contW + 320, 160, {
    render: { fillStyle: "#fff" },
    isStatic: true,
  });
  var wllL = Bdy.rectangle(-80, contH / 2, 160, contH, { isStatic: true });
  var wllR = Bdy.rectangle(contW + 80, contH / 2, 160, 1200, {
    isStatic: true,
  });
  var rf = Bdy.rectangle(contW / 2 + 160, -80, contW + 320, 160, {
    isStatic: true,
  });

  var rad = 20;

  var img1 = Bdy.rectangle(contW / 2 + 150, 500, 120, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/Esports.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img2 = Bdy.rectangle(contW / 2 - 150, 460, 170, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/Events.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img3 = Bdy.rectangle(contW / 2 + 250, 420, 87, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/Gamers.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img4 = Bdy.rectangle(contW / 2 - 75, 380, 140, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/Multiplayer.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img5 = Bdy.rectangle(contW / 2 - 74, 540, 146, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/Streaming.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img6 = Bdy.rectangle(contW / 2 + 174, 490, 106, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/Teams.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img7 = Bdy.rectangle(contW / 2 - 142, 440, 142, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/Twitch.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img8 = Bdy.rectangle(contW / 2 - 10, 260, 88, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/Virtual.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img9 = Bdy.rectangle(contW / 2 - 242, 420, 150, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/strategy.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img10 = Bdy.rectangle(contW / 2 + 60, 300, 104, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/ranking.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img11 = Bdy.rectangle(contW / 2, 320, 88, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/leagues.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img12 = Bdy.rectangle(contW / 2 - 59, 260, 102, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/arena.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img13 = Bdy.rectangle(contW / 2 + 110, 260, 102, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/meta.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img14 = Bdy.rectangle(contW / 2 - 110, 296, 120, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/ping.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img15 = Bdy.rectangle(contW / 2 - 10, 260, 156, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/gamers.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img16 = Bdy.rectangle(contW / 2 - 80, 260, 90, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/esports.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img17 = Bdy.rectangle(contW / 2 - 110, 260, 170, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/streaming.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img18 = Bdy.rectangle(contW / 2 + 90, 260, 164, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/events.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img19 = Bdy.rectangle(contW / 2 + 80, 260, 190, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/multiplayer.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img20 = Bdy.rectangle(contW / 2 - 59, 260, 102, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/teams.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img21 = Bdy.rectangle(contW / 2 - 200, 360, 88, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/twitch.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img22 = Bdy.rectangle(contW / 2 + 90, 260, 164, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/virtual.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img23 = Bdy.rectangle(contW / 2 + 80, 260, 170, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/strategy.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });
  var img24 = Bdy.rectangle(contW / 2 - 200, 360, 88, 50, {
    chamfer: { radius: rad },
    render: {
      sprite: {
        texture: "./images/matter/ranking.png",
        xScale: 1,
        yScale: 1,
      },
    },
  });

  Wld.add(eng.world, [
    grd,
    wllL,
    wllR,
    rf,
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
  ]);

  var mou = Mou.create(ren.canvas),
    mCon = MCon.create(eng, {
      mouse: mou,
      constraint: {
        stiffness: 0.2,
        render: { visible: false },
      },
    });

  Wld.add(wld, mCon);

  ren.mouse = mou;

  mou.element.removeEventListener("mousewheel", mou.mousewheel);
  mou.element.removeEventListener("DOMMouseScroll", mou.mousewheel);

  let clk = false;

  document.addEventListener("mousedown", () => (clk = true));
  document.addEventListener("mousemove", () => (clk = false));

  Evt.on(mCon, "mouseup", function (e) {
    var mCon = e.source;
    var bdys = eng.world.bodies;
    if (!mCon.bodyB) {
      for (i = 0; i < bdys.length; i++) {
        var bdy = bdys[i];
        if (clk === true) {
          if (Matter.Bounds.contains(bdy.bounds, mCon.mouse.position)) {
            var bdyUrl = bdy.url;
            if (bdyUrl != undefined) {
              window.open(bdyUrl, "_blank");
            }
            break;
          }
        }
      }
    }
  });

  Matter.Runner.run(eng);
  Ren.run(ren);
}

var contEl = document.querySelector(".pill-container");

var obsv = new IntersectionObserver((entries, obsv) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startSim();
      obsv.disconnect();
    }
  });
}, {});

obsv.observe(contEl);
