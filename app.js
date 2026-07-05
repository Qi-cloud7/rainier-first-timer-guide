const routes = {
  classic: {
    title: "Paradise classic：第一次去的主路线",
    badge: "推荐主线",
    mapImage: "./assets/google-map-paradise-classic.png",
    mapLink:
      "https://www.google.com/maps/dir/47.67399,-122.12151/46.76820,-122.00220/46.74980,-121.81120/46.78610,-121.73510/46.76920,-121.72820/46.77510,-121.74680/46.77170,-121.77970/47.67399,-122.12151",
    summary:
      "适合第一次去：先抢 Paradise 停车，再用短 trail 看雪山、草甸、瀑布，下午用 Reflection Lakes 和 Narada/Christine 做水景和长曝光。",
    drive: "约 5-6 小时总驾驶，含停车和假日/夏季波动前的估计",
    walking: "约 3-5 miles，可按体力只走核心段",
    schedule: [
      ["5:30-5:50", "Redmond 出发", "目标是 8:30 到 Paradise 停车场。出门前看 WSDOT 和 NPS road status。"],
      ["7:30-8:00", "Nisqually Entrance", "America the Beautiful pass + ID 准备好。无需买 $30 私家车票。"],
      ["8:15", "Longmire 通过", "除非要厕所/短暂停，否则先不上 Longmire trail，优先上 Paradise 停车。"],
      ["8:30", "Paradise/Jackson Visitor Center 停车", "第一优先级：停好车。停车成功后再慢慢拍。"],
      ["8:45-10:00", "Nisqually Vista", "1.2 mi 入门 loop，看冰川/雪山/草甸，是第一次去最稳的热身。"],
      ["10:15-11:30", "Myrtle Falls", "约 1 mi 往返，Rainier + 瀑布经典构图，适合 16-35mm。"],
      ["11:45-13:30", "Alta Vista / Deadhorse sample", "只走一段上高点或看冰川，不追完整 Skyline。"],
      ["14:15-15:15", "Reflection Lakes", "车边/短走，倒影、湖边前景、长焦树线切片。"],
      ["15:30-17:00", "Narada + Christine Falls", "水景/长曝光，最后低体力收尾。"],
      ["17:00-20:30", "返回 Redmond", "根据体力决定是否在 Eatonville/Puyallup 附近吃饭。"]
    ],
    rules: [
      "8:30 还没停进 Paradise，就不要先走 trail；先解决停车或切 backup。",
      "不要同一天再冲 Sunrise。两个区域都值得，但一天深玩会变成赶路。",
      "Skyline 全程很经典，但明天只 sample。第一次去不要让长 hike 抢走所有风景。"
    ]
  },
  light: {
    title: "Paradise light：更轻松、少 trail 的版本",
    badge: "低体力版本",
    mapImage: "./assets/google-map-paradise-classic.png",
    mapLink:
      "https://www.google.com/maps/dir/47.67399,-122.12151/46.78610,-121.73510/46.76920,-121.72820/46.77510,-121.74680/46.77170,-121.77970/47.67399,-122.12151",
    summary:
      "如果前一天累、天气一般、或不想走太多，就做 Paradise 停车场周边短走，再加 Reflection Lakes 这个车边倒影点，最后用 Narada/Christine 轻量收尾。",
    drive: "约 5-6 小时总驾驶，Reflection Lakes 只增加短绕行但更依赖 Stevens Canyon 路况",
    walking: "约 1.5-3 miles，Reflection Lakes 可车边拍",
    schedule: [
      ["5:50", "Redmond 出发", "仍建议早走，因为 Paradise 停车不等人。"],
      ["8:30", "Paradise 停车", "先拍游客中心附近山景，熟悉地形。"],
      ["9:00-10:00", "Nisqually Vista 或 Myrtle Falls 二选一先走", "如果云开，先去视野更好的 Nisqually Vista；如果想拍水，先 Myrtle。"],
      ["10:30-12:00", "另一条短 trail", "只走舒服的距离，不追 Skyline。"],
      ["12:30-13:30", "Reflection Lakes", "如果山露出来且湖面不太乱，拍倒影；如果有风，就用 100-300mm 抽取树线、雪山和湖边层次。"],
      ["14:00-15:00", "Narada Falls", "广角 + ND 长曝光主场；阴天也稳。"],
      ["15:15-15:45", "Christine Falls / Ricksecker Point", "低体力路边收尾，适合最后一组照片。"],
      ["15:45-19:45", "返程", "早回家，保留好心情。"]
    ],
    rules: [
      "Reflection Lakes 是 light 版唯一新增湖边点：到场先看山和风，如果没有倒影就快速拍树线/湖面后撤。",
      "如果山被云完全盖住，瀑布和森林会比硬等山更有收获。",
      "这条路线最适合第一次摸清 Paradise，不适合追求最多打卡点。"
    ]
  },
  backup: {
    title: "停车/天气 backup：Paradise 进不去也不崩",
    badge: "Plan B",
    mapImage: "./assets/google-map-paradise-backup.png",
    mapLink:
      "https://www.google.com/maps/dir/47.67399,-122.12151/46.74980,-121.81120/46.77510,-121.74680/46.76920,-121.72820/47.67399,-122.12151",
    summary:
      "如果 Paradise 主停车场满、山被云压住、或你们不想耗在找车位上，就用 Longmire + Narada + Reflection Lakes 当作摄影 backup。",
    drive: "约 5-6 小时总驾驶，少走 trail，多靠车边点位",
    walking: "约 1-2.5 miles",
    schedule: [
      ["8:30 前后", "Paradise 停车失败判断", "不要乱停路边；不要为了一个车位浪费 90 分钟。"],
      ["9:00-10:00", "Longmire / Trail of the Shadows", "森林、历史感、低体力 loop，适合等天气。"],
      ["10:30-12:00", "Narada Falls", "瀑布在云天也能拍，适合 ND/三脚架。"],
      ["12:30-14:00", "Reflection Lakes", "如果山露出来就拍倒影；如果不露，就拍湖面、树线、雾气。"],
      ["14:30-15:30", "Christine Falls / Ricksecker Point", "路边轻量收尾。"],
      ["15:30+", "根据状态返程", "天气突然变好再考虑回 Paradise，不把它当必须。"]
    ],
    rules: [
      "Backup 的核心是减少挫败感：看不到山也能拍瀑布、森林、湖。",
      "如果 Visibility 很差，Reflection Lakes 不一定值得硬去；Narada/Christine 更稳。",
      "不要把 backup 变成第二套满负荷行程。"
    ]
  }
};

const parkingAreas = [
  {
    title: "Paradise / Jackson Visitor Center",
    status: "主停车点",
    image: "./assets/myrtle-falls-rainier-real.jpg",
    note:
      "这是明天的核心停车场。停好车后，Nisqually Vista、Myrtle Falls、Alta Vista、Skyline sample 都从这里展开。",
    tip:
      "8:30 到达仍是合理目标，但不能保证。到场先找车位，不要先在路边拍照拖时间。"
  },
  {
    title: "Nisqually Entrance",
    status: "Redmond 最常用入口",
    image: "./assets/google-map-paradise-classic.png",
    note:
      "从 Redmond 去 Paradise 通常走 Nisqually Entrance，经 Longmire 上山。入口可能排队，pass 和 ID 提前放好。",
    tip:
      "你有 America the Beautiful pass，不需要买 $30/7-day pass，但 Mount Rainier 是 cashless，信用卡仍要带。"
  },
  {
    title: "Longmire",
    status: "备用/厕所/森林点",
    image: "./assets/narada-falls-real.jpg",
    note:
      "Longmire 是 Paradise 路上的低海拔区域，有 Trail of the Shadows、历史建筑和森林感。适合 backup，不是明天主线。",
    tip:
      "如果 Paradise 停车满，可以先下撤 Longmire 或去 Narada，不要在 Paradise 附近硬耗。"
  },
  {
    title: "Reflection Lakes / Narada Falls",
    status: "下午摄影点",
    image: "./assets/reflection-lake-rainier-real.jpg",
    note:
      "这两个点更像车边摄影 stop。Reflection 拍倒影和长焦树线，Narada 拍瀑布长曝光。",
    tip:
      "停车位有限但周转快。这里适合作为 Paradise 主 trail 后的轻量收尾。"
  }
];

const regions = [
  {
    id: "paradise",
    label: "Paradise",
    title: "Paradise / Longmire：第一次去最该先理解的区域",
    image: "./assets/myrtle-falls-rainier-real.jpg",
    parking: "Paradise main lot / Jackson Visitor Center；下方有 Longmire、Narada、Christine 作为 backup。",
    bestFor: "雪山近景、草甸、瀑布、游客中心、经典短 trail。",
    photo: "16-35mm 拍草甸+山、Myrtle/Narada；100-300mm 拍冰川纹理、雪线、人物比例。",
    caution: "停车压力最大。不要把 Skyline 全程当成第一次去的默认选择。"
  },
  {
    id: "sunrise",
    label: "Sunrise",
    title: "Sunrise / White River：高海拔、长焦压缩强，但留给下次",
    image: "./assets/sourdough-ridge-wta.jpg",
    parking: "White River Entrance 控制上山；Sunrise Visitor Center 和沿路 pullouts。",
    bestFor: "Emmons Glacier、Sourdough Ridge、Fremont、Burroughs、高山开阔感。",
    photo: "100-300mm 很强，适合压缩山脊、冰川、trail 上的人。",
    caution: "从 Paradise 跨到 Sunrise 会花掉大量驾驶时间，一天不要深玩两边。"
  },
  {
    id: "tipsoo",
    label: "Tipsoo",
    title: "Tipsoo / Chinook Pass：湖、花、山景，适合另一条东侧路线",
    image: "./assets/naches-tipsoo-wta.jpg",
    parking: "Tipsoo/Upper Tipsoo 路边停车，夏季也会紧张但周转较快。",
    bestFor: "湖面倒影、花、Chinook Pass、公路尺度感。",
    photo: "16-35mm 拍湖边前景；100-300mm 拍山与树线切片。",
    caution: "Naches Peak Loop 在积雪期不适合轻松完整走；明天不是主线。"
  },
  {
    id: "ohanapecosh",
    label: "Ohanapecosh",
    title: "Ohanapecosh / Stevens Canyon：森林、河流、峡谷感",
    image: "./assets/narada-falls-real.jpg",
    parking: "Stevens Canyon / Ohanapecosh 区域，适合从东南侧进入或做 backup。",
    bestFor: "Box Canyon、Silver Falls、河流、温带森林。",
    photo: "广角拍森林纵深和河流；阴天也能出片。",
    caution: "2026 Ohanapecosh campground/visitor center 有 construction closure；Grove of the Patriarchs 仍关闭。"
  },
  {
    id: "carbon",
    label: "Carbon / Mowich",
    title: "Carbon / Mowich：很美，但当前不适合明天",
    image: "./assets/fremont-lookout-wta.jpg",
    parking: "Carbon River / Mowich Lake 通常是西北侧路线。",
    bestFor: "Tolmie Peak、Spray Park、Carbon Glacier 等更野、更远的区域。",
    photo: "湖、远山、野花和更少人的路线。",
    caution: "NPS road status 当前写明 SR165/Fairfax Bridge 问题导致 Carbon/Mowich 无公共通行，不作为一天计划。"
  }
];

const trails = [
  {
    name: "Nisqually Vista Trail",
    area: "Paradise",
    tags: ["easy", "photo"],
    image: "./assets/myrtle-falls-rainier-real.jpg",
    distance: "1.2 mi loop",
    time: "45-75 分钟",
    scenery: "冰川方向、雪山近景、草甸、第一次理解 Paradise 地形。",
    photo: "100-300mm 拍 Nisqually Glacier 纹理；16-35mm 拍草甸前景。",
    sample: "值得完整走，距离短、信息量高，适合作为第一条 trail。"
  },
  {
    name: "Myrtle Falls via Skyline",
    area: "Paradise",
    tags: ["easy", "photo", "water"],
    image: "./assets/myrtle-falls-rainier-real.jpg",
    distance: "约 1 mi 往返",
    time: "45-75 分钟",
    scenery: "瀑布、桥、草甸、Rainier 背景，是 Paradise 最经典的短构图之一。",
    photo: "16-35mm 主力；如果人多，用 100-300mm 抽取瀑布和桥的局部。",
    sample: "必走短段。人多时不要在桥口架太久，先拍安全构图。"
  },
  {
    name: "Alta Vista Trail sample",
    area: "Paradise",
    tags: ["photo", "sample"],
    image: "./assets/sourdough-ridge-wta.jpg",
    distance: "1.7 mi loop",
    time: "45-90 分钟 sample",
    scenery: "比停车场高一点的视角，草甸、雪山、游客尺度、山体层次。",
    photo: "长焦拍 trail 上的人和山的比例；广角拍草甸前景。",
    sample: "只走到你觉得视角打开的位置即可，不必完整 loop。"
  },
  {
    name: "Deadhorse Creek / Glacier Vista sample",
    area: "Paradise",
    tags: ["photo", "sample"],
    image: "./assets/reflection-lake-rainier-real.jpg",
    distance: "约 2.5 mi 方向组合",
    time: "60-120 分钟 sample",
    scenery: "更接近雪线和冰川视角，能看到 Paradise 上方更开阔的山体。",
    photo: "100-300mm 拍冰川边缘、雪线、山体纹理；光硬时比广角更稳。",
    sample: "只走到第一个让你满意的高点就折返。不要让它变成 Skyline 全程。"
  },
  {
    name: "Skyline Trail",
    area: "Paradise",
    tags: ["skip", "photo"],
    image: "./assets/myrtle-falls-rainier-real.jpg",
    distance: "5.5 mi loop",
    time: "3.5-5 小时全程",
    scenery: "Paradise 最经典大 loop，山、冰川、草甸、远山都强。",
    photo: "摄影价值极高，但全程会吃掉明天大部分时间和体力。",
    sample: "明天不走全程。只借用 Myrtle/Alta Vista/Glacier Vista 的短段。"
  },
  {
    name: "Reflection Lakes",
    area: "Stevens Canyon / Paradise",
    tags: ["easy", "photo", "water"],
    image: "./assets/reflection-lake-rainier-real.jpg",
    distance: "车边/短走",
    time: "30-60 分钟",
    scenery: "Rainier 倒影、湖面、树线、下午轻量摄影点。",
    photo: "16-35mm 拍倒影；100-300mm 拍树线和雪山局部。CPL 不要把倒影全消掉。",
    sample: "不需要 trail。天气/风不配合时快速看一眼即可。"
  },
  {
    name: "Narada Falls",
    area: "Longmire / Paradise road",
    tags: ["easy", "photo", "water"],
    image: "./assets/narada-falls-real.jpg",
    distance: "短走到观景点",
    time: "30-60 分钟",
    scenery: "水量感强、阴天也能拍的瀑布，适合低体力收尾。",
    photo: "16-35mm + ND；从 1/4、1/2、1 秒试起，保留水纹理。",
    sample: "非常适合作为停车失败或云多时的 backup。注意湿滑和水雾。"
  },
  {
    name: "Christine Falls / Ricksecker Point",
    area: "Longmire road",
    tags: ["easy", "water"],
    image: "./assets/narada-falls-real.jpg",
    distance: "路边/短走",
    time: "15-40 分钟",
    scenery: "小瀑布、桥、路边 viewpoint，返程顺手拍。",
    photo: "Christine 用广角水景；Ricksecker 看天气，山露出来再停。",
    sample: "轻量 stop，不要为了它打乱 Paradise 主线。"
  },
  {
    name: "Bench & Snow Lakes",
    area: "Stevens Canyon",
    tags: ["sample", "photo"],
    image: "./assets/reflection-lake-rainier-real.jpg",
    distance: "2.4 mi",
    time: "1.5-2.5 小时",
    scenery: "湖、树林、草甸，比 Reflection Lakes 更需要徒步。",
    photo: "湖边前景和中长焦树线都不错。",
    sample: "明天非主线。只有时间很多、停车顺利、体力很好才考虑。"
  },
  {
    name: "Pinnacle Peak Trail",
    area: "Reflection Lakes",
    tags: ["skip"],
    image: "./assets/reflection-lake-rainier-real.jpg",
    distance: "2.6 mi",
    time: "2-3 小时",
    scenery: "从 Reflection Lakes 附近上升，看 Tatoosh Range 和 Rainier 视角。",
    photo: "山体层次强，但要爬升，不符合明天轻松第一次去。",
    sample: "跳过。把时间给 Paradise 短 trail 和瀑布更稳。"
  },
  {
    name: "Trail of the Shadows",
    area: "Longmire",
    tags: ["easy", "sample"],
    image: "./assets/narada-falls-real.jpg",
    distance: "0.7 mi loop",
    time: "25-45 分钟",
    scenery: "Longmire 历史区、森林、湿地感，低海拔轻松 loop。",
    photo: "阴天可拍森林和小细节，但不是 Rainier 大山景。",
    sample: "停车失败或天气差时很适合；主线顺利时可跳过。"
  },
  {
    name: "Box Canyon / Ohanapecosh side",
    area: "Ohanapecosh",
    tags: ["skip", "water"],
    image: "./assets/narada-falls-real.jpg",
    distance: "短走到中等不等",
    time: "取决于点位",
    scenery: "峡谷、河流、森林，和 Paradise 的雪山草甸完全不同。",
    photo: "广角森林/峡谷感强，阴天也可拍。",
    sample: "这次不作为主线。适合另一日或 Paradise 天气完全坏掉时研究。"
  },
  {
    name: "Sunrise Nature / Emmons Vista / Fremont",
    area: "Sunrise",
    tags: ["skip", "photo"],
    image: "./assets/sourdough-ridge-wta.jpg",
    distance: "1-5.6 mi 不等",
    time: "45 分钟到半天",
    scenery: "高海拔开阔山景、Emmons Glacier、长焦压缩强。",
    photo: "100-300mm 极强，但不是明天 Paradise-first 的主线。",
    sample: "留给下次。不要同日从 Paradise 深玩过去。"
  }
];

const checklist = [
  "America the Beautiful pass、ID、信用卡放在容易拿的位置。",
  "5:30-5:50 从 Redmond 出发，目标 8:30 到 Paradise 停车场。",
  "出门前查 NPS road status、webcams、WSDOT traffic。",
  "下载/截图 Google Maps 路线；园区内 cell service 不稳定。",
  "带 2-3L 水、午餐/零食、外套、防晒、帽子、头灯。",
  "相机：R5、100-300mm、16-35mm、ND、CPL、三脚架、两块电池、空卡、擦镜布。",
  "如果 Paradise 停车满，不路边乱停；切到 Narada/Longmire/Reflection backup。",
  "不飞无人机，不踩草甸，不靠近野生动物，trail 有雪/湿滑就及时折返。"
];

function renderParking() {
  document.querySelector("#parkingGrid").innerHTML = parkingAreas
    .map(
      (item) => `
        <article class="parking-card">
          <img src="${item.image}" alt="${item.title}">
          <div>
            <span>${item.status}</span>
            <h3>${item.title}</h3>
            <p>${item.note}</p>
            <p><strong>Planner tip：</strong>${item.tip}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderRoute(key = "classic") {
  const route = routes[key];
  document.querySelector("#routePanel").innerHTML = `
    <article class="route-card">
      <img class="route-map" src="${route.mapImage}" alt="${route.title} 的 Google Maps 路线截图">
      <div class="route-copy">
        <span>${route.badge}</span>
        <h3>${route.title}</h3>
        <p>${route.summary}</p>
        <div class="route-stats">
          <strong>${route.drive}</strong>
          <strong>${route.walking}</strong>
        </div>
        <a class="button small" href="${route.mapLink}" target="_blank" rel="noreferrer">打开 Google Maps 路线</a>
      </div>
    </article>
  `;

  document.querySelector("#routeNotes").innerHTML = `
    <h3>时间线</h3>
    <div class="timeline">
      ${route.schedule
        .map(
          ([time, title, note]) => `
            <article>
              <time>${time}</time>
              <strong>${title}</strong>
              <p>${note}</p>
            </article>
          `
        )
        .join("")}
    </div>
    <h3>路线规则</h3>
    <ul>
      ${route.rules.map((rule) => `<li>${rule}</li>`).join("")}
    </ul>
  `;
}

function renderRegionTabs(active = "paradise") {
  document.querySelector("#regionTabs").innerHTML = regions
    .map(
      (region) => `
        <button class="region-filter ${region.id === active ? "active" : ""}" type="button" data-region="${region.id}">
          ${region.label}
        </button>
      `
    )
    .join("");

  document.querySelectorAll("[data-region]").forEach((button) => {
    button.addEventListener("click", () => renderRegionPanel(button.dataset.region));
  });
}

function renderRegionPanel(id = "paradise") {
  const region = regions.find((item) => item.id === id) || regions[0];
  document.querySelectorAll("[data-region]").forEach((button) => {
    button.classList.toggle("active", button.dataset.region === region.id);
  });
  document.querySelector("#regionPanel").innerHTML = `
    <article class="region-card">
      <img src="${region.image}" alt="${region.title}">
      <div>
        <span>${region.label}</span>
        <h3>${region.title}</h3>
        <p><strong>停车/入口：</strong>${region.parking}</p>
        <p><strong>适合看：</strong>${region.bestFor}</p>
        <p><strong>摄影重点：</strong>${region.photo}</p>
        <p><strong>注意：</strong>${region.caution}</p>
      </div>
    </article>
  `;
}

function renderTrails(filter = "all") {
  const filtered = trails.filter((trail) => filter === "all" || trail.tags.includes(filter));
  document.querySelector("#trailGrid").innerHTML = filtered
    .map(
      (trail) => `
        <article class="trail-card">
          <img src="${trail.image}" alt="${trail.name}">
          <div class="trail-body">
            <div class="trail-meta">
              <span>${trail.area}</span>
              <span>${trail.distance}</span>
            </div>
            <h3>${trail.name}</h3>
            <p><strong>大概时间：</strong>${trail.time}</p>
            <p><strong>风景特色：</strong>${trail.scenery}</p>
            <p><strong>摄影价值：</strong>${trail.photo}</p>
            <p><strong>明天怎么走：</strong>${trail.sample}</p>
          </div>
        </article>
      `
    )
    .join("");
}

function renderChecklist() {
  document.querySelector("#checklist").innerHTML = checklist
    .map(
      (item) => `
        <label>
          <input type="checkbox">
          <span>${item}</span>
        </label>
      `
    )
    .join("");
}

document.querySelectorAll("[data-route]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-route]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderRoute(button.dataset.route);
  });
});

document.querySelectorAll("[data-filter]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll("[data-filter]").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    renderTrails(button.dataset.filter);
  });
});

renderParking();
renderRoute("classic");
renderRegionTabs("paradise");
renderRegionPanel("paradise");
renderTrails("all");
renderChecklist();
