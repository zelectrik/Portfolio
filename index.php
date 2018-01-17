<?php $year=date('Y')-1998;?>
<!DOCTYPE HTML>
<html>
  <head>
	<meta charset="UTF-8">
    <title>Thibault Dufour</title>
    <link rel="stylesheet" type="text/css" href="style.css" />
	<link rel="stylesheet" type="text/css" href="animate.css" />
    </style>
    <script type='text/javascript' src='jquery-3.2.1.js'></script>
	<script type='text/javascript' src='jcanvas.js'></script>
    <script type='text/javascript' src='main.js'></script>
  </head>
  <body >
  <header>
	<div id="nameDiv">
		<a class="js-scrollTo" id="thibault" href="#main_img"><h1 id="name">Thibault Dufour</h1></a>
	</div>
	<nav id="menu">
		<ul id="menuList">
			<li class="itemListMenu"><a class="js-scrollTo" id="refPersonal" href="#Personal">About</a></li>
			<li class="itemListMenu"><a class="js-scrollTo" id="refSkills" href="#Skills">Skills</a></li>
			<li class="itemListMenu"><a class="js-scrollTo" id="refEducation" href="#Education">Education</a></li>
			<li class="itemListMenu"><a class="js-scrollTo" id="refProjects" href="#Projects">Works</a></li>
			<li class="itemListMenu"><a class="js-scrollTo" id="refHobbie" href="#Hobbies">Hobbie</a></li>
			<li class="itemListMenu"><a class="js-scrollTo" id="refReferences" href="#References">References</a></li>
		</ul>
	</nav>
  </header>
  
  <div id="main_img" class="main_img_allumé"></div>
  <div id="character" ></div>
  <div class="robotMSG"></div>
  <div class="BetweenStage"></div>
  <div id="DevantureElevatorStage0"></div>
  <div id="Elevatormain_img"></div>
	<div id="content">
		<div class="FlexDiv">
			<div id="Stage1"></div>
			<div id="Personal" class="divContent">
				<h2 id="TitlePersonal" class="TitleRot">About me</h2>
				<div id="CadreThibault"></div>
				<div id="TextPersonal" class="TextContentDiv">
					<p id="Presentation">
					My name is Thibault Dufour, I'm <?php echo $year;?> years old.
					I'm an IT developer. I live in Annecy, France.
					As you can see, art has always been an important part of my life.
					Creativity and imagination are really important things for me.
					I love to imagine and concept games projects.
					I'm a dynamic and creative person.
					</p>
					<div>
						<div class="LinkList">
							<a href="mailto:Thibault.Dufour@etu.univ-savoie.fr" class="LinkMail" ><img src="Images/at.png" class="LinkMail" /></a>
							<a href="https://www.linkedin.com/in/thibault-d-6b5a88105" target = "_blank" class="LinkLinkedin" ><img src="Images/Linkedin.png" class="LinkLinkedin" /></a>
							<a href="ThibaultDufourCV" target = "_blank" class="LinkCV" ><img src="Images/CVDL.png" class="LinkCV" /></a>
							
						</div>
						<p class="mailLink">Thibault.Dufour@etu.univ-savoie.fr</p>
					</div>
				</div>
				<div class="DevantureElevator"></div>
  				<div id="ElevatorPersonal"></div>
			</div>
		</div>
		<div class="BetweenStage"></div>
		<div class="FlexDiv">
			<div id="Stage2"></div>
			<div id="Skills" class="divContent">
				<h2 id="TitleSkills" class="TitleRot">Skills</h2>
				<div id="TextSkills" class="TextContentDiv">
					<div id="LanguageSkills">
						<h6>Language skills</h6>
						<canvas id="CanvasFrancais" width="120" height="130" class="CanvasProgressBar">100@French@<span class="TextSkillDescritption">This is my mother tongue.</span></canvas>
						<canvas id="CanvasEnglish" width="120" height="130" class="CanvasProgressBar">65@English@<span class="TextSkillDescritption">I practice English since my begin at school.</span></canvas>
					</div>
					<div id="SoftwareSkills">
						<h6>Software skills</h6>
						<canvas id="CanvasVisual" width="120" height="130" class="CanvasProgressBar">75@Visual Studio@<span class="TextSkillDescritption">Using and developing on Visual studio</span></canvas>
						<canvas id="CanvasUnrealEngine" width="120" height="130" class="CanvasProgressBar">65@Unreal Engine 4@<span class="TextSkillDescritption">Developing game with blueprint and C++ programation.</span></canvas>
						<canvas id="CanvasUnity" width="120" height="130" class="CanvasProgressBar">60@Unity 3D@<span class="TextSkillDescritption">Developing 3D game in C#</span></canvas>
						<canvas id="CanvasBlender" width="120" height="130" class="CanvasProgressBar">70@Blender@<span class="TextSkillDescritption">Creating 3d object and armature.</span></canvas>
						<canvas id="CanvasZbrush" width="120" height="130" class="CanvasProgressBar">50@Zbrush@<span class="TextSkillDescritption">Making sculpt of 3d shapes.</span></canvas>
						<canvas id="CanvasOffice" width="120" height="130" class="CanvasProgressBar">85@Suite Office@<span class="TextSkillDescritption">Working with word, excel/VBA and power point.</span></canvas>
						<canvas id="CanvasPhotoshop" width="120" height="130" class="CanvasProgressBar">50@Photoshop@<span class="TextSkillDescritption">Designing, drawing and patterning.</span></canvas>
					</div>
					<div id="DevelopmentSkills">
						<h6>Development skills</h6>
						<canvas id="CanvasC" width="120" height="130" class="CanvasProgressBar">60@C/C++@<span class="TextSkillDescritption">Developing API with C or oriented object with C++. And graphical API with SFML.</span></canvas>
						<canvas id="CanvasCsharp" width="120" height="130" class="CanvasProgressBar">70@C#@<span class="TextSkillDescritption">Developing API with oriented object C#. And web API with .net</span></canvas>
						<canvas id="CanvasSQL" width="120" height="130" class="CanvasProgressBar">65@SQL@<span class="TextSkillDescritption">Creating and managing database.</span></canvas>
						<canvas id="CanvasHTML" width="120" height="130" class="CanvasProgressBar">75@HTML/CSS@<span class="TextSkillDescritption">Creating basic website.</span></canvas>
						<canvas id="CanvasJS" width="120" height="130" class="CanvasProgressBar">65@JS/Jquery@<span class="TextSkillDescritption">Creating some interaction and making ajax.</span></canvas>
						<canvas id="CanvasUML" width="120" height="130" class="CanvasProgressBar">65@UML@<span class="TextSkillDescritption">Concepting and managing projects.</span></canvas>
					</div>
				</div>
				<div class="DevantureElevator"></div>
  				<div id="ElevatorSkills"></div>
			</div>
		</div>
		<div class="BetweenStage"></div>
		<div class="FlexDiv">
			<div id="Stage3"></div>
			<div id="Education" class="divContent">
				<h2 id="TitleEducation" class="TitleRot">Education</h2>
				<div id="TextEducation" class="TextContentDiv">
					<div id="IUT" class="School">
						<div id="designIUT" >
							<img src="Images/Diploma-256.png" class="diploma"/>
						</div>
						<div id="textIUT" >
							<h2 class="nameDiploma">DUT Informatique (2-year university diploma in Computer Science)</h2>
							<h4>2016-2018</h4>
							<p>
								At the Annecy-Le-Vieux University of Technology (FRANCE,University of Savoie).</br>
								Learning computer science during 2 years with intership of 3 months in </br>
								professional environment and the realisation
								of a sold project in a team.
							</p>
						</div>
					</div>
					<div id="Lycee" class="School">
						<div id="designIUT" >
							<img src="Images/Diploma-256.png" class="diploma"/>
						</div>
						<div id="textIUT" >
							<h2 class="nameDiploma">French Baccalaureate S-SVT (High School diploma specialized in physical science and science and earth life) with honors</h2>
							<h4>2013-2016</h4>
							<p>
								At Berthollet High school (FRANCE,Annecy).</br>
								Learning physical science and science and earth life
								during 3 years.
							</p>
						</div>
					</div>
				</div>
				<div class="DevantureElevator"></div>
  				<div id="ElevatorEducation"></div>
			</div>
		</div>
		<div class="BetweenStage"></div>
		<div class="FlexDiv">
			<div id="Stage4"></div>
			<div id="Projects" class="divContent">
				<h2 id="TitleProjects" class="TitleRot">Works</h2>
				<div id="TextProjects" class="TextContentDiv">
					<div id="Work1" class="Work">
						<img src="Images/Garbage.png" class="diploma"/>
						<div>
							<div class="DateWork">
								2 months in 2016 - 2 months in 2017
							</div>
							<div class="ContentWork">
								Le grand Annecy - Annecy, France:</br>
								Mission: Garbage man
							</div>
						</div>
					</div>
				</div>

				<div class="DevantureElevator"></div>
  				<div id="ElevatorProjects"></div>
  				<div class="NavTypes">
					
				</div>
			</div>
		</div>
		<div id="ContentProjects"></div>
		<div class="BetweenStage"></div>
		<div class="FlexDiv">
			<div id="Stage5"></div>
			<div id="Hobbies" class="divContent">
				<h2 id="TitleHobbies" class="TitleRot">Hobbie</h2>
				<div id="TextHobbie" class="TextContentDiv">
					<p>
						I passionate by all things around art, like painting, sculpting, drawing. I love to imagine and create things with my imagination. I express my imagination through digital drawing, 3d sculpting or 3d modeling.</br> I am also passionate about programing it's permitted to give life of creation. I was born in Annecy and today I still live in Annecy that's why I love skiing, go mountaineering during winter or going to the river or lake during summer.
					</p>
				</div>
				<div class="DevantureElevator"></div>
  				<div id="ElevatorHobbie"></div>
			</div>
		</div>
		<div class="BetweenStage"></div>
		<div class="FlexDiv">
			<div id="Stage6"></div>
			<div id="References" class="divContent">
				<h2 id="TitleReferences" class="TitleRot">References</h2>
				<div id="TextReferences" class="TextContentDiv Reference">
					<table>
						<tr>
							<td class="RefPres RefName" id="Ref1">
								<h3>Pascal Colin</h3>Teacher at IUT Annecy - Annecy, France
							</td>
							<td class="RefPres RefName" id="Ref2">
								<h3>Luc Damas</h3>Teacher at IUT Annecy - Annecy, France
							</td>
						</tr>
						<tr>
							<td class="RefPres RefRes" id="Ref1">
								UML/SQL Developer, project management teacher and </br>director of DUT Computer science
							</td>
							<td class="RefPres RefRes" id="Ref2">
								Web Developer and Software Developer
							</td>
						</tr>
						<tr id="contact">
							<td class="RefContact">
								<div class="LinkList">
									<a href="mailto:pascal.colin@univ-smb.fr" class="LinkMail" ><img src="Images/at.png" class="LinkMail" /></a>
									<a href="https://www.linkedin.com/in/pascal-colin-055a7535/" target = "_blank" class="LinkLinkedin" ><img src="Images/Linkedin.png" class="LinkLinkedin" /></a>
									
								</div>
								<p class="mailLink">pascal.colin@univ-smb.fr</p>
							</td>
							<td class="RefContact">
								<div class="LinkList">
									<a href="mailto:luc.damas@univ-smb.fr" class="LinkMail" ><img src="Images/at.png" class="LinkMail" /></a>
									<a href="https://www.linkedin.com/in/luc-damas-0b67731/" target = "_blank" class="LinkLinkedin" ><img src="Images/Linkedin.png" class="LinkLinkedin" /></a>
									
								</div>
								<p class="mailLink">luc.damas@univ-smb.fr</p>
							</td>
						</tr>
					</table>
				</div>
				<div class="DevantureElevator"></div>
  				<div id="ElevatorReferences"></div>
			</div>
		</div>
	</div>
  </body>
</html>