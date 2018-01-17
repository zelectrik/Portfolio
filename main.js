$(document).ready(function() {
	var mainColor="#FFA726";
	var white = "#FFFFFF";
	var radius=1;
	var n=0;
	var pas=5;
	var speedi=5;
	var heightSize=120;// hauteur du header
	var bTop=true;
	var MouseX;
	var PostionToTP;
	var CurrentCat='#main_img';
	var BeginCat='#main_img';
	var vitesseMax=5;
	var bTPByClick=false;
	var bIsInElevatorOrFree=true;
	var bIsGoingToElevator=false;
	var bSkillUpdate=false;

	var tabTypes = new Array("All","Web","Game","Professional","School","Personal");

	$.each(tabTypes,function(index,type){
		$(".NavTypes").append("<div id=type_"+type+" class='TypeSelNav'>"+type+"</div>");
	});
	$("#type_All").addClass('typeChoose');
	
	//Evenement map
	var bLightOn=true;
	
	window.scrollTo(0,0);
	/***********Load Project**********/
	$("#type_All").addClass("typeChoose");
	DisplayProject("All");

	$(window).resize(function(){
		$(".SelectionImg").each(function(){
			var nb=$(this).find(".imageNav").length;
			var widthOf = $(this).width()/nb-0;
			$(this).find(".imageNav").css("width", widthOf+"px");
		});
	});

	$("body").on("click",".imageNav",function()
	{
		$(this).parent().find(".imageSelect").removeClass("imageSelect");
		$(this).parent().parent().find(".mainProjectImg").attr("src",$(this).attr('src'));
		$(this).addClass("imageSelect");
	});

	$("body").on("click",".TypeSelNav",function()
	{
		$(".typeChoose").removeClass("typeChoose");
		$(this).addClass("typeChoose");
		if($("#ContentProjects").prev().hasClass("BetweenStage"))
		{
			$("#ContentProjects").prev().remove();
		}
		DisplayProject($(".typeChoose").text());
	});


	function DisplayProject(text)
	{
		
		$.getJSON('projects.json',function(data){
			console.log(data.length);
			$("#ContentProjects").empty();
			var tableData = new Array();
			$.each(data,function(index,d){
				if("All" == text)
				{
						tableData.push(d);
				}
				$.each(d.Type,function(nb,tpe)
				{
					if(tpe.Nom == text)
					{
						tableData.push(d);
					}
				});
			});
			
			if(tableData.length>1)
			{
				$("#ContentProjects").before("<div class='BetweenStage'></div>");
				$.each(tableData,function(index,d)
				{
					if(index==0)
					{
						$("#ContentProjects").append("<div class='FlexDiv'><div class='topProject'/><div id="+d.ID+" class='divContentbis'></div></div>");
						$("#"+d.ID).append("<div class='projectPres'></div>");
						$("#"+d.ID+" .projectPres").append("<div class='imageProject'></div>")
													.append("<div class='descriptionProject'></div>");

						$("#"+d.ID+" .projectPres .descriptionProject").append("<h2 class='ProjectTitle'>"+d.Titre+"</h2>");
						$("#"+d.ID+" .projectPres .descriptionProject").append("<div class='NavType'></div>");
						$.each(d.Type,function(nb,Type)
						{
							$("#"+d.ID+" .projectPres .descriptionProject .NavType").append("<div class='TypeLogo'>"+Type.Nom+"</div>");
						});
						$("#"+d.ID+" .projectPres .descriptionProject").append("<p class='TextProject'>"+d.Accroche+"</p>");
						$("#"+d.ID+" .projectPres .descriptionProject").append("<p class='TextProject'>"+d.Description+"</p>");

						$("#"+d.ID+" .projectPres .imageProject").append("<img class='mainProjectImg'/>")
																 .append("<div class='SelectionImg'/>");
						$.each(d.Image,function(i,img)
						{

							$("#"+d.ID+" .projectPres .imageProject .SelectionImg").append("<img id="+img.ID+" src="+img.URL+" class='imageNav'/>");
							var widthOf = $(".SelectionImg").width()/d.Image.length;
							$("#"+d.ID+" .projectPres .imageProject .SelectionImg .imageNav").css("width", widthOf+"px")
																							.css("height", $(".SelectionImg").height());
							if(i==0)
							{
								$("#"+d.ID+" .projectPres .imageProject .mainProjectImg").attr("src",img.URL);
								$("#"+d.ID+" .projectPres .imageProject .SelectionImg #"+img.ID).addClass("imageSelect");
								
							}
						});
						var widthOf = $(".SelectionImg").width()/d.Image.length;
						$("#"+d.ID+" .projectPres .imageProject .SelectionImg .imageNav").css("width", widthOf+"px");
						

					}
					else if(index == tableData.length-1)
					{
						$("#ContentProjects").append("<div class='FlexDiv'><div class='botProject'/><div id="+d.ID+" class='divContentbis'><div class='DevantureElevator'/><div id='ElevatorbotProject'/></div></div>");
						$("#"+d.ID).append("<div class='projectPresBot'></div>");
						$("#"+d.ID+" .projectPresBot").append("<div class='imageProject'></div>")
													.append("<div class='descriptionProject'></div>");

						$("#"+d.ID+" .projectPresBot .descriptionProject").append("<h2 class='ProjectTitle'>"+d.Titre+"</h2>");
						$("#"+d.ID+" .projectPresBot .descriptionProject").append("<div class='NavType'></div>");
						$.each(d.Type,function(nb,Type)
						{
							$("#"+d.ID+" .projectPresBot .descriptionProject .NavType").append("<div class='TypeLogo'>"+Type.Nom+"</div>");
						});
						$("#"+d.ID+" .projectPresBot .descriptionProject").append("<p class='TextProject'>"+d.Accroche+"</p>");
						$("#"+d.ID+" .projectPresBot .descriptionProject").append("<p class='TextProject'>"+d.Description+"</p>");

						$("#"+d.ID+" .projectPresBot .imageProject").append("<img class='mainProjectImg'/>")
									 .append("<div class='SelectionImg'/>");

						$.each(d.Image,function(i,img)
						{
							$("#"+d.ID+" .projectPresBot .imageProject .SelectionImg").append("<img id="+img.ID+" src="+img.URL+" class='imageNav'/>");
							var widthOf = $(".SelectionImg").width()/d.Image.length ;
							$("#"+d.ID+" .projectPresBot .imageProject .SelectionImg .imageNav").css("width", widthOf+"px")
																							.css("height", $(".SelectionImg").height());
							if(i==0)
							{
								$("#"+d.ID+" .projectPresBot .imageProject .mainProjectImg").attr("src",img.URL);
								$("#"+d.ID+" .projectPresBot .imageProject .SelectionImg #"+img.ID).addClass("imageSelect");
							}
						});
					}
					else
					{
						$("#ContentProjects").append("<div class='FlexDiv'><div class='midProject'/><div id="+d.ID+" class='divContentbis'></div></div>");
						$("#"+d.ID).append("<div class='projectPres'></div>");
						$("#"+d.ID+" .projectPres").append("<div class='imageProject'></div>")
													.append("<div class='descriptionProject'></div>");

						$("#"+d.ID+" .projectPres .descriptionProject").append("<h2 class='ProjectTitle'>"+d.Titre+"</h2>");
						$("#"+d.ID+" .projectPres .descriptionProject").append("<div class='NavType'></div>");
						$.each(d.Type,function(nb,Type)
						{
							$("#"+d.ID+" .projectPres .descriptionProject .NavType").append("<div class='TypeLogo'>"+Type.Nom+"</div>");
						});
						$("#"+d.ID+" .projectPres .descriptionProject").append("<p class='TextProject'>"+d.Accroche+"</p>");
						$("#"+d.ID+" .projectPres .descriptionProject").append("<p class='TextProject'>"+d.Description+"</p>");

						$("#"+d.ID+" .projectPres .imageProject").append("<img class='mainProjectImg'/>")
									 .append("<div class='SelectionImg'/>");

						$.each(d.Image,function(i,img)
						{
							$("#"+d.ID+" .projectPres .imageProject .SelectionImg").append("<img id="+img.ID+" src="+img.URL+" class='imageNav'/>");
							var widthOf = $(".SelectionImg").width()/d.Image.length;
							$("#"+d.ID+" .projectPres .imageProject .SelectionImg .imageNav").css("width", widthOf+"px")
																							.css("height", $(".SelectionImg").height());
							if(i==0)
							{
								$("#"+d.ID+" .projectPres .imageProject .mainProjectImg").attr("src",img.URL);
								$("#"+d.ID+" .projectPres .imageProject .SelectionImg #"+img.ID).addClass("imageSelect");
							}
						});
					}
					
				});
			}
			else if(tableData.length==1)
			{
				$("#ContentProjects").before("<div class='BetweenStage'></div>");
				$.each(tableData,function(index,d){
					$("#ContentProjects").append("<div class='FlexDiv'><div class='botProject' id='soloStage'/><div id="+d.ID+" class='divContentbis'><div class='DevantureElevator'/><div id='ElevatorbotProject'/></div></div>");
					$("#"+d.ID).append("<div class='projectPresBot'></div>");
					$("#"+d.ID+" .projectPresBot").append("<div class='imageProject'></div>")
												.append("<div class='descriptionProject'></div>");

					$("#"+d.ID+" .projectPresBot .descriptionProject").append("<h2 class='ProjectTitle'>"+d.Titre+"</h2>");
					$("#"+d.ID+" .projectPresBot .descriptionProject").append("<div class='NavType'></div>");
					$.each(d.Type,function(nb,Type)
					{
						$("#"+d.ID+" .projectPresBot .descriptionProject .NavType").append("<div class='TypeLogo'>"+Type.Nom+"</div>");
					});
					$("#"+d.ID+" .projectPresBot .descriptionProject").append("<p class='TextProject'>"+d.Accroche+"</p>");
					$("#"+d.ID+" .projectPresBot .descriptionProject").append("<p class='TextProject'>"+d.Description+"</p>");


					$("#"+d.ID+" .projectPresBot .imageProject").append("<img class='mainProjectImg'/>")
								 .append("<div class='SelectionImg'/>");

					$.each(d.Image,function(i,img)
					{
						$("#"+d.ID+" .projectPresBot .imageProject .SelectionImg").append("<img id="+img.ID+" src="+img.URL+" class='imageNav'/>");
						var widthOf = $(".SelectionImg").width()/d.Image.length ;
						$("#"+d.ID+" .projectPresBot .imageProject .SelectionImg .imageNav").css("width", widthOf+"px")
																						.css("height", $(".SelectionImg").height());
						if(i==0)
						{
							$("#"+d.ID+" .projectPresBot .imageProject .mainProjectImg").attr("src",img.URL);
							$("#"+d.ID+" .projectPresBot .imageProject .SelectionImg #"+img.ID).addClass("imageSelect");
						}
					});
				});
				
			}
		});
	}

	/***********End load***************/
	
	function GoToElevator(){
		$("#character").addClass("runner-right");
		$("#Elevator"+BeginCat.substring(1,BeginCat.length)).removeClass("ElevatorClose");
		BeginCat=CurrentCat;
		bIsGoingToElevator=true;
		bIsInElevatorOrFree=true;
		pas=0;
		$("#Elevator"+CurrentCat.substring(1,CurrentCat.length)).addClass("ElevatorOpen");
		$("#Elevator"+BeginCat.substring(1,BeginCat.length)).removeClass("ElevatorClose");
		console.log("#Elevator"+CurrentCat.substring(1,CurrentCat.length));
		var myvar=setInterval(function(){
			var media=$("#character");
			var p=media.offset();
			if(p.left<-250 && pas!=0 && pas<vitesseMax)
			{
				pas=pas+0.5;
			}
			else if(p.left>-250 && pas>-vitesseMax)
			{
				pas=pas-0.5;
			}
			
			$(".runner-right").css("left",p.left+pas*speedi+"px");
			if(pas==0)
			{
				$("#character").removeClass("runner-right");
				clearInterval(myvar);
				if(BeginCat!=CurrentCat)
					$("#Elevator"+BeginCat.substring(1,BeginCat.length)).removeClass("ElevatorOpen")
																		.addClass("ElevatorClose");

				tp();
			}
		},30);
	}
	
	function tp()
	{
		$("#character").css("top",PostionToTP.top+550+"px")
						.css("left",-250+"px");
		$("#Elevator"+CurrentCat.substring(1,CurrentCat.length)).addClass("ElevatorOpen");
		$("#character").addClass("runner-right");
		pas=0;
		bIsInElevatorOrFree=false;
		var myvar=setInterval(function(){
			var media=$("#character");
			var p=media.offset();
			console.log(p.left);
			if(p.left<200 && pas < vitesseMax)
			{
				pas=pas+0.5;
			}
			$(".runner-right").css("left",p.left+pas*speedi+"px");
			if(p.left>=200)
			{
				$("#character").removeClass("runner-right");
				bTPByClick=false;
				clearInterval(myvar);
				bIsInElevatorOrFree=true;
				bIsGoingToElevator=false;
				$("#Elevator"+CurrentCat.substring(1,CurrentCat.length)).removeClass("ElevatorOpen")
																		.addClass("ElevatorClose");
				if(BeginCat==CurrentCat)
					$("#Elevator"+BeginCat.substring(1,BeginCat.length)).removeClass("ElevatorOpen")
																		.addClass("ElevatorClose");
			}
		},30);
	}i

	$(document).click(function(e){
		console.log("X : "+e.pageX+" Y : "+e.pageY);
		if(e.pageX>=795 && e.pageX<=1142 && e.pageY>=150 && e.pageY<=170)
		{
			
			if(bLightOn)
			{
				$("#main_img").removeClass("main_img_allumé");
				$("#main_img").addClass("main_img_eteint");
				console.log("lumiere");
				bLightOn=false;
			}
			else
			{
				$("#main_img").removeClass("main_img_eteint");
				$("#main_img").addClass("main_img_allumé");
				bLightOn=true;
			}
			if($('#ElevatorStage0').hasClass('ElevatorOpen'))
			{
				
				$('#ElevatorStage0').removeClass('ElevatorOpen');
				$('#ElevatorStage0').addClass('ElevatorClose');
				console.log("test");
			}
			if($('#ElevatorStage0').hasClass('ElevatorClose'))
			{
				$('#ElevatorStage0').removeClass('ElevatorClose');
				$('#ElevatorStage0').addClass('ElevatorOpen');
			}
		}
	});

	setInterval(function(){
		$(".robotMSG").css("top",$("#character").offset().top-75+"px")
						.css("left",$("#character").offset().left+"px");
		console.log($("#character").offset().left);
	},50);

	$(".CanvasProgressBar").mouseover(function(){
		console.log($(this).find(".TextSkillDescritption").text());
		if(CurrentCat=="#Skills")
			$(".robotMSG").append($(this).find(".TextSkillDescritption").text())
						.css("top",$("#character").offset().top-75+"px")
						.css("left",$("#character").offset().left+"px")
						.css("background-color","white");
	});

	$(".CanvasProgressBar").mouseout(function(){
		console.log($(this).find(".TextSkillDescritption").text());
		$(".robotMSG").empty()
						.css("background-color","transparent");
	});
	
	/****Progress bar*******/
	var tabCanvas = $(".CanvasProgressBar");
	var tabText=[];
	var tabValMax = [];
	var tabCtx = [];
	var tabValActuel = [];
	var i=0;
	$(".CanvasProgressBar").each(function()
	{
		tabText.push($(this).text());
		tabText[i]=tabText[i].split('@');
		tabValMax.push(tabText[i][0]);
		tabCtx.push($(this).get(0).getContext('2d'));
		tabValActuel.push(0);
		i++;
	});
	/*
	for(var i=0;i<tabCanvas.length;i++)
	{
		tabText.push(tabCanvas[i].text());
		tabText[i]=tabText[i].split('@');
		tabValMax.push(tabText[i][0]);
		tabCtx.push(tabCanvas[i].get(0).getContext('2d'));
		tabValActuel.push(0);
	}*/
	var start = 4.72;
	var diffh=10;
	var cw = tabCtx[0].canvas.width;
	var ch = tabCtx[0].canvas.height-diffh;
	var diff;
	function progressSim(nb){
		diff = ((tabValActuel[nb] / 100) * Math.PI*2*10).toFixed(2);
		tabCtx[nb].clearRect(0, 0, cw, ch+diffh);
		tabCtx[nb].lineWidth = 10;
		tabCtx[nb].fillStyle = mainColor;
		tabCtx[nb].strokeStyle = mainColor;
		tabCtx[nb].textAlign = 'center';
		tabCtx[nb].fillText(tabValActuel[nb]+'%', cw*.5, ch*.5+2, cw);
		tabCtx[nb].font="15px Roboto";
		tabCtx[nb].fillText(tabText[nb][1], cw*.5, ch*.5+60);
		tabCtx[nb].beginPath();
		tabCtx[nb].arc(cw/2, cw/2-diffh/2+2, 30, start, diff/10+start, false);
		tabCtx[nb].stroke();
		
		tabValActuel[nb]++;
		if(tabValActuel[nb] <= tabValMax[nb]){
			console.log(tabValActuel[nb]);
			setTimeout(function(){progressSim(nb)},35);
			// Add scripting here that will run when progress completes
		}
		
	}
	
	/**End Bar**/
	
	$(window).scroll(function(){
		console.log($(document).scrollTop());
		console.log($("#References").offset().top);		
		if($(document).scrollTop()>=$("#References").offset().top-400)
		{
			
			if('#References'!=CurrentCat && bTPByClick==false && bIsInElevatorOrFree)
			{
				PostionToTP=$("#References").offset();
				if(!bIsGoingToElevator)
				{
					GoToElevator();
				}
			}
			$(".active").removeClass("active");
			$("#refReferences").addClass("active");
			if(bIsInElevatorOrFree)
				CurrentCat='#References';
			bTop=false;
		}
		else if($(document).scrollTop()>=$("#Hobbies").offset().top-400)
		{
			if('#Hobbie'!=CurrentCat && bTPByClick==false && bIsInElevatorOrFree)
			{
				PostionToTP=$("#Hobbies").offset();
				if(!bIsGoingToElevator)
				{
					GoToElevator();
				}
			}
			$(".active").removeClass("active");
			$("#refHobbies").addClass("active");
			if(bIsInElevatorOrFree)
				CurrentCat='#Hobbie';
			bTop=false;
		}
		else if($(document).scrollTop()>=$(".botProject").offset().top-$(".botProject").height())
		{
			if('.botProject'!=CurrentCat && '.topProject'!=CurrentCat && bTPByClick==false && bIsInElevatorOrFree)
			{
				PostionToTP=$(".botProject").offset();

				if(!bIsGoingToElevator)
				{
					GoToElevator();
				}
			}
			$(".active").removeClass("active");
			$("#refProjects").addClass("active");
			if(bIsInElevatorOrFree)
				CurrentCat='.botProject';
			bTop=false;
		}
		else if($(document).scrollTop()>=$("#Projects").offset().top-400)
		{
			if('#Projects'!=CurrentCat && bTPByClick==false && bIsInElevatorOrFree)
			{
				PostionToTP=$("#Projects").offset();
				if(!bIsGoingToElevator)
				{
					GoToElevator();
				}
			}
			$(".active").removeClass("active");
			$("#refProjects").addClass("active");
			if(bIsInElevatorOrFree)
				CurrentCat='#Projects';
			bTop=false;
		}
		else if($(document).scrollTop()>=$("#Education").offset().top-400)
		{
			if('#Education'!=CurrentCat && bTPByClick==false && bIsInElevatorOrFree)
			{
				PostionToTP=$("#Education").offset();
				if(!bIsGoingToElevator)
				{
					GoToElevator();
				}
			}
			$(".active").removeClass("active");
			$("#refEducation").addClass("active");
			if(bIsInElevatorOrFree)
				CurrentCat='#Education';
			bTop=false;
		}
		else if($(document).scrollTop()>=$("#Skills").offset().top-400)
		{
			if('#Skills'!=CurrentCat && bTPByClick==false && bIsInElevatorOrFree)
			{
				PostionToTP=$("#Skills").offset();
				if(!bIsGoingToElevator)
				{
					GoToElevator();
				}
				
			}
			if('#Skills'!=CurrentCat && bSkillUpdate==false)
			{
				if(bSkillUpdate==true)
				{
					
					for (var i=0;i<tabValActuel.length;i++)
					{
						tabValActuel[i]=0;
					}
				}
				for (var i=0;i<tabCtx.length;i++)
				{
					progressSim(i);
				}
				bSkillUpdate=true;
			}
			$(".active").removeClass("active");
			$("#refSkills").addClass("active");
			if(bIsInElevatorOrFree)
				CurrentCat='#Skills';
			
			bTop=false;
			
		}
		else if($(document).scrollTop()>=$("#Personal").offset().top-400)
		{
			if('#Personal'!=CurrentCat && bTPByClick==false && bIsInElevatorOrFree)
			{
				PostionToTP=$("#Personal").offset();
				if(!bIsGoingToElevator)
				{
					GoToElevator();
				}
			}
			$(".active").removeClass("active");
			$("#refPersonal").addClass("active");
			if(bIsInElevatorOrFree)
				CurrentCat='#Personal';
			bTop=false;
		}
		else
		{
			if('#main_img'!=CurrentCat && bTPByClick==false && bIsInElevatorOrFree)
			{
				PostionToTP=$("#main_img").offset();
				if(!bIsGoingToElevator)
				{
					GoToElevator();
				}
			}
			$(".active").removeClass("active");
			if(bIsInElevatorOrFree)
				CurrentCat='#main_img';
			bTop=true;
		}
	});
	
	
	$('.js-scrollTo').on('click', function() { // Au clic sur un élément
		var page = $(this).attr('href'); // Page cible
		var speed = 750; // Durée de l'animation (en ms)
		PostionToTP=$(page).offset();
		if(page!=CurrentCat && !bIsGoingToElevator)
		{
			GoToElevator();
			bTPByClick=true;
		}
			
		$('html, body').animate( { scrollTop: $(page).offset().top-heightSize }, speed ); // Go
		return false;
	});
});



	
