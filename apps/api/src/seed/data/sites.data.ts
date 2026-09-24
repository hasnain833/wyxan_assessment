export interface SeedSite {
  address: string;
  title: string;
  author: string;
  body: string;
}

export const SEED_SITES: SeedSite[] = [
  {
    address: 'tidepool.zz',
    title: 'The Tidepool Journal',
    author: 'Marina',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>The Tidepool Journal</title>
  <style>
    body { font-family: Georgia, serif; line-height: 1.7; color: #1c2a38; background: #f4f8f7; margin: 0; padding: 32px 24px; }
    .container { max-width: 680px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    h1 { color: #0f4c5c; font-size: 28px; margin-top: 0; border-bottom: 2px solid #e0ece9; padding-bottom: 12px; }
    .meta { font-style: italic; color: #5c7080; margin-bottom: 24px; }
    p { margin-bottom: 18px; font-size: 16px; }
    .nav-links { margin-top: 36px; padding-top: 20px; border-top: 1px dashed #c0d4cf; }
    a { color: #0f4c5c; text-decoration: none; font-weight: bold; }
    a:hover { text-decoration: underline; }
    .tag { display: inline-block; background: #e0ece9; color: #0f4c5c; padding: 2px 8px; border-radius: 4px; font-size: 13px; }
  </style>
</head>
<body>
  <div class="container">
    <span class="tag">Marine Ecology</span>
    <h1>The Tidepool Journal</h1>
    <div class="meta">Written by Marina · Notes from the coastal shelf</div>
    <p>
      At low tide, the sea retreats and leaves behind hundreds of miniature basins carved into the granite rock.
      Each pool is an entire ecosystem suspended in stillness: emerald anemones folding inward against the dry air,
      hermit crabs negotiating territories among kelp fronds, and tiny gobies darting beneath mineral shelves.
    </p>
    <p>
      Yesterday, before sunrise, the water in the north ledge was uncommonly clear. I watched a colony of limpets grazing
      on fine diatoms, moving microscopic millimeters over hours. There is immense patience in these salt margins.
    </p>
    <p>
      When the ocean rushes back, waves crash with sudden violent vitality. The delicate creatures anchor themselves
      against tens of atmospheres of water pressure, waiting out the tide with quiet endurance.
    </p>
    <div class="nav-links">
      <p><b>Outward channels:</b></p>
      <ul>
        <li>Visit my botanical archive at <a href="foxglove.zz">foxglove.zz</a></li>
        <li>Check coastal storm signals at <a href="lighthouse.zz">lighthouse.zz</a></li>
        <li>Read the ancient bathymetric charts at <a href="deepblue.zz">deepblue.zz</a> (deep trench notes)</li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
  {
    address: 'nightowl.zz',
    title: 'Night Owl — Midnight Observations',
    author: 'Felix',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Night Owl</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.65; color: #e2e8f0; background: #0f172a; margin: 0; padding: 32px 24px; }
    .box { max-width: 680px; margin: 0 auto; background: #1e293b; padding: 40px; border-radius: 12px; border: 1px solid #334155; }
    h1 { color: #38bdf8; font-size: 26px; margin-top: 0; }
    .author { color: #94a3b8; font-size: 14px; margin-bottom: 20px; }
    p { margin-bottom: 16px; font-size: 15px; color: #cbd5e1; }
    a { color: #7dd3fc; text-decoration: underline; }
    .card { background: #0f172a; border-left: 3px solid #38bdf8; padding: 12px 16px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="box">
    <h1>Night Owl</h1>
    <div class="author">By Felix · Field diary of nocturnal cities</div>
    <p>
      Cities do not sleep; they merely change metabolism. When the commuter trains cease around 2:00 AM,
      the subterranean arteries begin their real maintenance. High-pressure water sweeps the ballast stone,
      signal crews replace copper relays, and urban foxes traverse vacant avenues like ghost couriers.
    </p>
    <div class="card">
      "Silence in the metropolis is not the absence of sound, but the presence of reverberation."
    </div>
    <p>
      From the roof parapet of the old printing house, you can trace the grid purely by orange sodium vapor and
      cool mercury lamps. The architectural silence allows sound to carry three miles: the shunting of freight cars
      on the river piers, steam venting from municipal laundries.
    </p>
    <p>
      For those who find waking life crowded, midnight offers an unoccupied world of quiet geometry.
    </p>
    <hr style="border:0; border-top:1px solid #334155; margin:28px 0;">
    <p><b>Paths into the dark:</b></p>
    <ul>
      <li>Read my structural essays on stone at <a href="brickwork.zz">brickwork.zz</a></li>
      <li>Study astronomical chronometers at <a href="pendulum.zz">pendulum.zz</a></li>
      <li>Inspect the celestial stellar observatory at <a href="stardust.zz">stardust.zz</a></li>
    </ul>
  </div>
</body>
</html>`,
  },
  {
    address: 'brickwork.zz',
    title: 'Brickwork & Mortar',
    author: 'Felix',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Brickwork & Mortar</title>
  <style>
    body { font-family: "Courier New", Courier, monospace; line-height: 1.6; color: #2b1d14; background: #e8ded2; margin: 0; padding: 32px 20px; }
    .wrapper { max-width: 640px; margin: 0 auto; background: #fdfbf7; padding: 36px; border: 2px solid #8c4c2e; }
    h1 { color: #8c4c2e; font-size: 24px; text-transform: uppercase; letter-spacing: 1px; }
    .by { font-size: 13px; color: #735443; margin-bottom: 24px; }
    p { margin-bottom: 16px; font-size: 15px; }
    a { color: #8c4c2e; font-weight: bold; }
    .spec { background: #f0e6dc; border: 1px solid #cbb29c; padding: 12px; margin: 16px 0; font-size: 13px; }
  </style>
</head>
<body>
  <div class="wrapper">
    <h1>Brickwork & Mortar</h1>
    <div class="by">Monograph by Felix — Masonry, binder ratios, and load paths</div>
    <p>
      Lime mortar cures through carbonation, slowly absorbing carbon dioxide from the surrounding atmosphere over decades.
      Unlike modern Portland cement, which forms a rigid and unforgiving crystalline matrix, hydraulic lime yields slightly
      under settling, allowing centuries-old brick vaults to breathe and flex.
    </p>
    <div class="spec">
      FORMULA: 1 Part Slaked Lime Putty : 2.5 Parts Sharp River Sand : 0.25 Brick Dust Pozzolan
    </div>
    <p>
      When restoring a Roman arch or an 18th-century kiln, using modern cement guarantees destruction: moisture
      gets trapped behind the impermeable joint and spalls the softer clay face when winter freezes arrive.
      True architecture honors the breath of its materials.
    </p>
    <p>
      The English bond remains the strongest pattern: alternating courses of stretchers and headers, tying the wall thickness
      into a single monolithic mass capable of bearing cathedral bell towers.
    </p>
    <div style="margin-top: 30px; border-top: 1px dashed #8c4c2e; padding-top: 16px;">
      <p><b>Cross-references:</b></p>
      <ul>
        <li>Nocturnal survey notes: <a href="nightowl.zz">nightowl.zz</a></li>
        <li>Land surveying and soil compaction: <a href="terranova.zz">terranova.zz</a></li>
        <li>Carved stone water spouts archive: <a href="gargoyle.zz">gargoyle.zz</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
  {
    address: 'inkwell.zz',
    title: 'The Inkwell — Typographic Letters',
    author: 'Celeste',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>The Inkwell</title>
  <style>
    body { font-family: "Baskerville", "Times New Roman", serif; background: #faf8f5; color: #222; margin: 0; padding: 40px 20px; line-height: 1.8; }
    .sheet { max-width: 660px; margin: 0 auto; background: #fff; padding: 48px; border: 1px solid #eae2d6; border-radius: 4px; }
    h1 { font-weight: normal; font-size: 32px; letter-spacing: 0.5px; margin-top: 0; color: #1a1a1a; }
    .author { font-size: 14px; text-transform: uppercase; letter-spacing: 1.5px; color: #887b6d; margin-bottom: 30px; }
    p { font-size: 17px; margin-bottom: 20px; }
    blockquote { border-left: 2px solid #222; margin: 24px 0; padding-left: 20px; font-style: italic; }
    a { color: #3c524d; text-decoration: underline; }
  </style>
</head>
<body>
  <div class="sheet">
    <h1>The Inkwell</h1>
    <div class="author">Celeste · Notes on movable type, rag paper, and ink viscosity</div>
    <p>
      Lampblack ink, ground with gum arabic and boiled linseed oil, possesses a blackness that synthetic pigments cannot imitate.
      When pressed into moistened cotton rag paper, the metal sort bites into the cellulose fibers, leaving an indelible relief
      that can be read with fingertips in total darkness.
    </p>
    <blockquote>
      "The page is a quiet room. The letters are furniture arranged for the solitary reader."
    </blockquote>
    <p>
      Modern screens project light into the eyes; the printed page catches ambient light and diffuses it.
      In an age of endless ephemeral feeds, setting words by hand on a composing stick forces the writer
      to reckon with every comma, every ligature, every silence between sentences.
    </p>
    <div style="margin-top: 36px; padding-top: 24px; border-top: 1px solid #eee;">
      <p><b>Read further across the web:</b></p>
      <ul>
        <li>Pluvial hydrography and cistern design: <a href="raincatcher.zz">raincatcher.zz</a></li>
        <li>Saltwater flora and coastal biology: <a href="tidepool.zz">tidepool.zz</a></li>
        <li>Urban nightscapes and empty corridors: <a href="nightowl.zz">nightowl.zz</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
  {
    address: 'foxglove.zz',
    title: 'Foxglove Garden & Herbarium',
    author: 'Marina',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Foxglove Garden</title>
  <style>
    body { font-family: "Palatino Linotype", "Book Antiqua", Palatino, serif; background: #f3f7f0; color: #273b22; margin: 0; padding: 36px 20px; line-height: 1.75; }
    .content { max-width: 660px; margin: 0 auto; background: #ffffff; padding: 42px; border-radius: 8px; border: 1px solid #d7e4d2; }
    h1 { color: #355e3b; font-size: 30px; margin-top: 0; }
    .sub { font-size: 14px; color: #5a7d52; margin-bottom: 24px; }
    p { font-size: 16px; margin-bottom: 18px; }
    .botanical { background: #f8faf6; border: 1px solid #e2ece0; padding: 14px 18px; border-radius: 6px; margin: 20px 0; }
    a { color: #2e6930; font-weight: bold; }
  </style>
</head>
<body>
  <div class="content">
    <h1>Foxglove Garden</h1>
    <div class="sub">Cultivated & recorded by Marina — Medicinal flora and wild hedges</div>
    <p>
      Digitalis purpurea stands six feet tall in the damp clay border beside the compost trench.
      Its tubular blossoms, spotted with deep purple throat markings, are shaped precisely to receive the heavy weight
      of queen bumblebees. Each flower produces over a million dust-like seeds, carried across garden walls by the gentlest draft.
    </p>
    <div class="botanical">
      <b>Toxicity warning:</b> All parts of the foxglove contain cardiac glycosides (digitoxin and digoxin).
      In minute pharmacology, it strengthens ventricular contraction; in untrained hands, it halts the heartbeat entirely.
    </div>
    <p>
      A proper garden does not attempt to conquer wilderness. It negotiates an uneasy treaty with nettles, yarrow, and bindweed,
      celebrating the plants that volunteer between stone flags as much as the cultivated perennials.
    </p>
    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #d7e4d2;">
      <p><b>Companion journals:</b></p>
      <ul>
        <li>Marine tide ecosystems: <a href="tidepool.zz">tidepool.zz</a></li>
        <li>Wax craftsmanship and apiary tallow: <a href="candlewick.zz">candlewick.zz</a></li>
        <li>Paper making and pressed botanical specimens: <a href="inkwell.zz">inkwell.zz</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
  {
    address: 'lighthouse.zz',
    title: 'The Lighthouse Keeper — Point Farallon',
    author: 'Jasper',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>The Lighthouse Keeper</title>
  <style>
    body { font-family: -apple-system, system-ui, sans-serif; background: #eef2f5; color: #1e293b; margin: 0; padding: 32px 20px; line-height: 1.7; }
    .main { max-width: 680px; margin: 0 auto; background: #ffffff; padding: 40px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.06); }
    h1 { color: #0369a1; font-size: 28px; margin-top: 0; }
    .badge { background: #0284c7; color: #fff; padding: 3px 8px; border-radius: 4px; font-size: 12px; font-weight: 600; text-transform: uppercase; }
    p { font-size: 16px; margin-bottom: 18px; }
    a { color: #0284c7; text-decoration: none; font-weight: 600; }
    a:hover { text-decoration: underline; }
    .log-entry { border-left: 4px solid #0284c7; padding-left: 16px; margin: 20px 0; background: #f0f9ff; padding: 14px; }
  </style>
</head>
<body>
  <div class="main">
    <span class="badge">Station Log</span>
    <h1>The Lighthouse Keeper</h1>
    <p style="color:#64748b; font-size:14px;">Keeper Jasper · Tower height 114 ft · Fresnel lens 1st order</p>
    <div class="log-entry">
      <b>LOG 09-22:</b> Gale warning from northwest. Barometer dropped 18 millibars in four hours.
      Mercury float bath cleaned and rotation mechanism rewound by hand. Clockwork escapement running smoothly.
    </div>
    <p>
      The Fresnel lens uses concentric annular rings of glass prisms to bend divergent lantern rays into an intense,
      parallel beam visible twenty-six nautical miles over the curvature of the open Atlantic.
      Six tons of brass and glass rotate on a bath of liquid mercury with so little friction that a single fingertip
      can set the entire apparatus in motion.
    </p>
    <p>
      Fog horns were activated at 18:00 as maritime vapor enveloped the headlands. No vessel sightings since afternoon freighter.
    </p>
    <div style="margin-top: 36px; padding-top: 20px; border-top: 1px solid #e2e8f0;">
      <p><b>Signal connections:</b></p>
      <ul>
        <li>Precision clockwork and escapement gears: <a href="pendulum.zz">pendulum.zz</a></li>
        <li>Low tide surveys and coastal reefs: <a href="tidepool.zz">tidepool.zz</a></li>
        <li>Cartographic charts and geology: <a href="terranova.zz">terranova.zz</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
  {
    address: 'pendulum.zz',
    title: 'Pendulum & Spring — Horological Studies',
    author: 'Jasper',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Pendulum & Spring</title>
  <style>
    body { font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif; background: #26211d; color: #ede6dc; margin: 0; padding: 32px 20px; line-height: 1.7; }
    .dial { max-width: 650px; margin: 0 auto; background: #332b26; padding: 40px; border-radius: 12px; border: 1px solid #574a41; }
    h1 { color: #d4a373; font-size: 26px; margin-top: 0; }
    .author { color: #a89f91; font-size: 13px; margin-bottom: 22px; }
    p { font-size: 15px; margin-bottom: 16px; color: #dfd7cc; }
    a { color: #faedcd; text-decoration: underline; }
    .diagram { background: #241e1a; border: 1px solid #4a3e35; padding: 14px; border-radius: 6px; font-family: monospace; font-size: 13px; color: #d4a373; }
  </style>
</head>
<body>
  <div class="dial">
    <h1>Pendulum & Spring</h1>
    <div class="author">By Jasper · Notes on isochronism, deadbeat escapements, and chronometers</div>
    <p>
      Christiaan Huygens discovered in 1656 that a simple circular pendulum is not truly isochronous:
      wider arcs take marginally longer than narrow swings. It is only when the bob is guided along a cycloidal curve
      that the period of oscillation becomes strictly independent of amplitude.
    </p>
    <div class="diagram">
      [ ESCAPE WHEEL ] <-- impulse pallet --> [ CRUTCH ] === ( PENDULUM ROD : Invar 36 )
    </div>
    <p>
      George Graham refined this with the deadbeat escapement, eliminating the wasteful recoil that disturbed
      free oscillation. Later, Charles Édouard Guillaume engineered Invar—a nickel-iron alloy with near-zero thermal expansion—
      so clock pendulums would not lose seconds during summer heatwaves or gain time in winter frosts.
    </p>
    <p>
      Timekeeping is the art of isolating a mechanical vibration from all environmental noise: gravity, heat, air friction, and vibration.
    </p>
    <div style="margin-top: 32px; padding-top: 18px; border-top: 1px solid #4a3e35;">
      <p><b>Transits and bearings:</b></p>
      <ul>
        <li>Tower beacons and station logs: <a href="lighthouse.zz">lighthouse.zz</a></li>
        <li>Foundations and thermal mass of vaults: <a href="brickwork.zz">brickwork.zz</a></li>
        <li>Midnight transit observations: <a href="nightowl.zz">nightowl.zz</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
  {
    address: 'raincatcher.zz',
    title: 'Raincatcher — Pluvial Engineering',
    author: 'Celeste',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Raincatcher</title>
  <style>
    body { font-family: "Trebuchet MS", "Lucida Sans", sans-serif; background: #eaf2f8; color: #1a364a; margin: 0; padding: 32px 20px; line-height: 1.7; }
    .well { max-width: 660px; margin: 0 auto; background: #ffffff; padding: 38px; border-radius: 12px; border: 1px solid #cbe0ef; }
    h1 { color: #1e5f8a; font-size: 28px; margin-top: 0; }
    .meta { font-size: 14px; color: #62829a; margin-bottom: 22px; }
    p { font-size: 16px; margin-bottom: 18px; }
    a { color: #1e5f8a; font-weight: bold; }
    .quote { background: #f0f7fc; border-left: 4px solid #1e5f8a; padding: 12px 18px; font-style: italic; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="well">
    <h1>Raincatcher</h1>
    <div class="meta">Written by Celeste · Cistern construction and rain harvesting techniques</div>
    <p>
      One millimeter of rain falling on a one hundred square meter roof yields exactly one hundred liters of pure freshwater.
      Before water touches the main holding cistern, it must pass through a first-flush diverter—a vertical pipe that traps
      the initial deluge carrying roof dust, pollen, and fallen leaves.
    </p>
    <div class="quote">
      "Water is not a commodity to be piped from afar, but skyfall to be welcomed and stored with reverence."
    </div>
    <p>
      In regions with erratic monsoon cycles, underground basalt cisterns maintain water at 14 degrees Celsius year-round,
      inhibiting algal bloom and bacterial development without chemical treatment.
    </p>
    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #d9e9f5;">
      <p><b>Aquifer connections:</b></p>
      <ul>
        <li>Paper pulp washing and ink grinding: <a href="inkwell.zz">inkwell.zz</a></li>
        <li>Topographical drainage basins: <a href="terranova.zz">terranova.zz</a></li>
        <li>Sunken maritime caves and freshwater seeps: <a href="lostcove.zz">lostcove.zz</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
  {
    address: 'terranova.zz',
    title: 'Terra Nova — Cartographic Expeditions',
    author: 'Rowan',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>Terra Nova</title>
  <style>
    body { font-family: "Georgia", serif; background: #f5efe6; color: #2e261f; margin: 0; padding: 36px 20px; line-height: 1.7; }
    .map { max-width: 680px; margin: 0 auto; background: #fffcf8; padding: 42px; border: 1px solid #ded4c5; border-radius: 6px; }
    h1 { color: #6b4e3d; font-size: 30px; margin-top: 0; }
    .author { font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #8c7361; margin-bottom: 22px; }
    p { font-size: 16px; margin-bottom: 18px; }
    a { color: #6b4e3d; font-weight: bold; text-decoration: underline; }
    .coord { font-family: monospace; background: #ece2d3; padding: 4px 8px; border-radius: 3px; font-size: 14px; }
  </style>
</head>
<body>
  <div class="map">
    <h1>Terra Nova</h1>
    <div class="author">Rowan · Triangulation surveys, geodesy, and contour mapping</div>
    <p>
      Every accurate map begins with a measured baseline. In 1784, General Roy measured a five-mile line across Hounslow Heath
      using seasoned glass rods, establishing the geodetic foundation for the entire British triangulation.
    </p>
    <p>
      From that single baseline, surveyor theodolites sighted mountain summits across fifty miles, calculating
      spherical excess and proving the oblate spheroidal curvature of the Earth itself.
    </p>
    <p>
      Current benchmark reference: <span class="coord">54°12'08"N 04°28'30"W</span> — Peak elevation 621m above mean sea level.
    </p>
    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #e0d5c3;">
      <p><b>Survey routes:</b></p>
      <ul>
        <li>Tallow candles and night surveying beacons: <a href="candlewick.zz">candlewick.zz</a></li>
        <li>Point Farallon lighthouse coordinates: <a href="lighthouse.zz">lighthouse.zz</a></li>
        <li>Flora inventory along coastal ridges: <a href="foxglove.zz">foxglove.zz</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
  {
    address: 'candlewick.zz',
    title: 'The Candlewick — Chandlery & Beeswax',
    author: 'Rowan',
    body: `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>The Candlewick</title>
  <style>
    body { font-family: "Garamond", Georgia, serif; background: #fffdf5; color: #2c251e; margin: 0; padding: 36px 20px; line-height: 1.75; }
    .hive { max-width: 660px; margin: 0 auto; background: #ffffff; padding: 42px; border: 1px solid #ebd9b8; border-radius: 8px; }
    h1 { color: #b87333; font-size: 28px; margin-top: 0; }
    .subtitle { font-size: 14px; color: #8a6a42; margin-bottom: 24px; font-style: italic; }
    p { font-size: 16px; margin-bottom: 18px; }
    a { color: #b87333; font-weight: bold; }
    .formula { background: #fcf8ee; border: 1px solid #ebd9b8; padding: 14px; border-radius: 6px; margin: 20px 0; }
  </style>
</head>
<body>
  <div class="hive">
    <h1>The Candlewick</h1>
    <div class="subtitle">Rowan · Chandlery crafts, unrefined beeswax, and braided cotton wicks</div>
    <p>
      A candle is a miniature gas factory. Heat from the flame melts the pool of wax below, which ascends the porous wick
      by capillary action. Reaching the combustion zone, the liquid hydrocarbon vaporizes into combustible gas,
      producing light and carbon dioxide in steady equilibrium.
    </p>
    <div class="formula">
      PURE BEESWAX: Melting point 62–64°C. Burns without smoke or acrid petroleum soot, releasing natural honey esters.
    </div>
    <p>
      Braided cotton wicks were a quiet revolution in 1825: by twisting three strands under differential tension,
      the burning tip curled automatically into the oxidizing outer mantle of the flame, consuming itself cleanly
      and eliminating the need for constant snuffing scissors.
    </p>
    <div style="margin-top: 32px; padding-top: 20px; border-top: 1px solid #ebd9b8;">
      <p><b>Follow the warm trails:</b></p>
      <ul>
        <li>Geodetic survey stations and trig points: <a href="terranova.zz">terranova.zz</a></li>
        <li>Parchment binding and iron gall recipes: <a href="inkwell.zz">inkwell.zz</a></li>
        <li>Coastal low-tide marine journals: <a href="tidepool.zz">tidepool.zz</a></li>
      </ul>
    </div>
  </div>
</body>
</html>`,
  },
];
