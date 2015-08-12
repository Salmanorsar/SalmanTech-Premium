$(document).bind("pageinit", function() {	

	var CommentAGP;
		
	$("#exconCalBtn").bind("tap", function() {
	
		$('#TG1').val("");
		$('#TG2').val("");
		$('#TG3').val("");
		$('#TG4').val("");
		$('#TG5').val("");
		$('#TG6').val("");
				
		var ex1 = .7 * parseFloat($('#Ex1').val());
		var con1 = .3 * parseFloat($('#Con1').val());
		
		var ex2 = .7 * parseFloat($('#Ex2').val());
		var con2 = .3 * parseFloat($('#Con2').val());
		
		var ex3 = .7 * parseFloat($('#Ex3').val());
		var con3 = .3 * parseFloat($('#Con3').val());
		
		var ex4 = .7 * parseFloat($('#Ex4').val());
		var con4 = .3 * parseFloat($('#Con4').val());
		
		var ex5 = .7 * parseFloat($('#Ex5').val());
		var con5 = .3 * parseFloat($('#Con5').val());
		
		var ex6 = .7 * parseFloat($('#Ex6').val());
		var con6 = .3 * parseFloat($('#Con6').val());
		
		var finalAns1 = ex1 + con1 ;		
		var conAns1 = finalAns1.toString();
		
		var finalAns2 = ex2 + con2 ;		
		var conAns2 = finalAns2.toString();
		
		var finalAns3 = ex3 + con3 ;		
		var conAns3 = finalAns3.toString();
		
		var finalAns4 = ex4 + con4 ;		
		var conAns4 = finalAns4.toString();
		
		var finalAns5 = ex5 + con5 ;		
		var conAns5 = finalAns5.toString();
		
		var finalAns6 = ex6 + con6 ;		
		var conAns6 = finalAns6.toString();
		
		//Exam and Continuous 1	
		if (isNaN(conAns1))
		{
			$('#TG1').val("Data Err");
		}
		else if (conAns1.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns1.substring(0, 5);
			var retrieve6 = conAns1.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG1').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG1').val(char1 + char2 + char3 + numChar4 + "0"  + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG1').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG1').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}			
				}
				else if (char6 == num[i])
				{
					$('#TG1').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns1.length <= 5)
		{
			var retrieve5 = conAns1.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

			if (isNaN(newChar5) && char3 == ".")
			{			
				$('#TG1').val(char1 + char2 + char3 + char4 + "0" + " %");
			}	
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG1').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if(newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG1').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (char3 != ".")
			{
				$('#TG1').val(char1 + char2 + "." + "0" + "0" + " %");
			}
		}
		
		//Exam and Continuous 2
		if (isNaN(conAns2))
		{
			$('#TG2').val("Data Err");
		}
		else if (conAns2.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns2.substring(0, 5);
			var retrieve6 = conAns2.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG2').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG2').val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG2').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG2').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}			
				}
				else if (char6 == num[i])
				{
					$('#TG2').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns2.length <= 5)
		{
			var retrieve5 = conAns2.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

			if (isNaN(newChar5) && char3 == ".")
			{			
				$('#TG2').val(char1 + char2 + char3 + char4 + "0" + " %");
			}	
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG2').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if(newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG2').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (char3 != ".")
			{
				$('#TG2').val(char1 + char2 + "." + "0" + "0" + " %");
			}
		}
		
		//Exam and Continuous 3
		if (isNaN(conAns3))
		{
			$('#TG3').val("Data Err");
		}
		else if (conAns3.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns3.substring(0, 5);
			var retrieve6 = conAns3.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG3').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG3').val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG3').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG3').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}			
				}
				else if (char6 == num[i])
				{
					$('#TG3').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns3.length <= 5)
		{
			var retrieve5 = conAns3.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

			if (isNaN(newChar5) && char3 == ".")
			{			
				$('#TG3').val(char1 + char2 + char3 + char4 + "0" + " %");
			}	
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG3').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if(newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG3').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (char3 != ".")
			{
				$('#TG3').val(char1 + char2 + "." + "0" + "0" + " %");
			}
		}
		
		//Exam and Continuous 4
		if (isNaN(conAns4))
		{
			$('#TG4').val("Data Err");
		}
		else if (conAns4.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns4.substring(0, 5);
			var retrieve6 = conAns4.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG4').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG4').val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG4').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG4').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}			
				}
				else if (char6 == num[i])
				{
					$('#TG4').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns4.length <= 5)
		{
			var retrieve5 = conAns4.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

			if (isNaN(newChar5) && char3 == ".")
			{			
				$('#TG4').val(char1 + char2 + char3 + char4 + "0" + " %");
			}	
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG4').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if(newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG4').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (char3 != ".")
			{
				$('#TG4').val(char1 + char2 + "." + "0" + "0" + " %");
			}
		}

		//Exam and Continuous 5
		if (isNaN(conAns5))
		{
			$('#TG5').val("Data Err");
		}
		else if (conAns5.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns5.substring(0, 5);
			var retrieve6 = conAns5.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG5').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG5').val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG5').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG5').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}			
				}
				else if (char6 == num[i])
				{
					$('#TG5').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns5.length <= 5)
		{
			var retrieve5 = conAns5.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

			if (isNaN(newChar5) && char3 == ".")
			{			
				$('#TG5').val(char1 + char2 + char3 + char4 + "0" + " %");
			}	
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG5').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if(newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG5').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (char3 != ".")
			{
				$('#TG5').val(char1 + char2 + "." + "0" + "0" + " %");
			}
		}
		
		//Exam and Continuous 6
		if (isNaN(conAns6))
		{
			$('#TG6').val("Data Err");
		}
		else if (conAns6.length >= 6)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve5 = conAns6.substring(0, 5);
			var retrieve6 = conAns6.substring(0, 6);
			
			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			
			var char5 = retrieve5.charAt(4);
			var char6 = retrieve6.charAt(5);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char6 == num1[i])
				{
					var numChar5 = parseInt(char5);
					numChar5 += 1;
										
					if (numChar5 <= 9)
					{	
						$('#TG6').val(char1 + char2 + char3 + char4 + numChar5 + " %");
					}	
					else if(numChar5 > 9 && char4 <= 8)
					{	
						var numChar4 = parseInt(char4);
						numChar4 += 1;
						$('#TG6').val(char1 + char2 + char3 + numChar4 + "0" + " %");
					}
					else if(numChar5 > 9 && char4 >= 9 && char2 <= 8)
					{
						var numChar2 = parseInt(char2);
						numChar2 += 1;
						$('#TG6').val(char1 + numChar2 + char3 + "0" + "0" + " %");
					}			
					else if(numChar5 > 9 && char4 >= 9 && char2 >= 9)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						$('#TG6').val(numChar1 + "0" + char3 + "0" + "0" + " %");
					}			
				}
				else if (char6 == num[i])
				{
					$('#TG6').val(char1 + char2 + char3 + char4 + char5 + " %");
				}
			}						
		}
		else if (conAns6.length <= 5)
		{	
			var retrieve5 = conAns6.substring(0, 5);

			var char1 = retrieve5.charAt(0);
			var char2 = retrieve5.charAt(1);
			var char3 = retrieve5.charAt(2);
			var char4 = retrieve5.charAt(3);
			var char5 = retrieve5.charAt(4);
			
			var newChar2 = parseInt(char2);
			var newChar4 = parseInt(char4);
			var newChar5 = parseInt(char5);
			

			if (isNaN(newChar5) && char3 == ".")
			{			
				$('#TG6').val(char1 + char2 + char3 + char4 + "0" + " %");
			}	
			else if (isNaN(newChar4) && isNaN(newChar5) && char3 == ".")
			{
				$('#TG6').val(char1 + char2 + char3 + "0" + "0" + " %");
			}
			else if(newChar4 >= 0 && newChar5 >= 0 && char3 == ".")
			{
				$('#TG6').val(char1 + char2 + char3 + char4 + char5 + " %");
			}
			else if (char3 != ".")
			{
				$('#TG6').val(char1 + char2 + "." + "0" + "0" + " %");
			}			
		}

		
		var G1 = parseFloat($("#TG1").val());
		var G2 = parseFloat($("#TG2").val());
		var G3 = parseFloat($("#TG3").val());
		var G4 = parseFloat($("#TG4").val());
		var G5 = parseFloat($("#TG5").val());
		var G6 = parseFloat($("#TG6").val());
		
		var G1Total;
		var G2Total;
		var G3Total;
		var G4Total;
		var G5Total;
		var G6Total;
		
		var GradeTotal;
		var TotalModule = 6;
		var AGP;
		
		
		$('#GradeOne').clearQueue();
		
		//First Grade Point
		if (G1 >= 69.50 && G1 <= 100)
		{
			$('#GradeOne').val("[A+] Excellent 4.00 Points");
			G1Total = 4.00;
		}
		else if (G1 >= 64.5 && G1 <= 69.49)
		{
			$('#GradeOne').val("[A-] Very Good 3.75 Points");
			G1Total = 3.75;
		}
		else if (G1 >= 59.5 && G1 <= 64.49)
		{
			$('#GradeOne').val("[B+] Good 3.25 Points");
			G1Total = 3.25;
		}
		else if (G1 >= 54.5 && G1 <= 59.49)
		{
			$('#GradeOne').val("[B] Credit 3.00 Points");
			G1Total = 3.00;
		}
		else if (G1 >= 49.5 && G1 <= 54.49)
		{
			$('#GradeOne').val("[B-] Credit 2.75 Points");
			G1Total = 2.75;
		}
		else if (G1 >= 44.5 && G1 <= 49.49)
		{
			$('#GradeOne').val("[C+] Pass 2.50 Points");
			G1Total = 2.50;
		}
		else if (G1 >= 39.5 && G1 <= 44.49)
		{
			$('#GradeOne').val("[C-] Pass 2.25 Points");
			G1Total = 2.25;
		}
		else if (G1 >= 29.5 && G1 <= 39.49)
		{
			$('#GradeOne').val("[D] Fail 1.75 Points");
			G1Total = 1.75;
		}
		else if (G1 >= 0 && G1 <= 29.49)
		{
			$('#GradeOne').val("[F] Fail 0.00 Points");
			G1Total = 0.00;
		}
		else
		{
			$('#GradeOne').val("Invalid data at Grade One");
			$('#InputBox1').focus();
			$('#InputBox1').select();
		}

		
		//Second Grade Point
		if (G2 >= 69.50 && G2 <= 100)
		{
			$('#GradeTwo').val("[A+] Excellent 4.00 Points");
			G2Total = 4.00;
		}
		else if (G2 >= 64.5 && G2 <= 69.49)
		{
			$('#GradeTwo').val("[A-] Very Good 3.75 Points");
			G2Total = 3.75;
		}
		else if (G2 >= 59.5 && G2 <= 64.49)
		{
			$('#GradeTwo').val("[B+] Good 3.25 Points");
			G2Total = 3.25;
		}
		else if (G2 >= 54.5 && G2 <= 59.49)
		{
			$('#GradeTwo').val("[B] Credit 3.00 Points");
			G2Total = 3.00;
		}
		else if (G2 >= 49.5 && G2 <= 54.49)
		{
			$('#GradeTwo').val("[B-] Credit 2.75 Points");
			G2Total = 2.75;
		}
		else if (G2 >= 44.5 && G2 <= 49.49)
		{
			$('#GradeTwo').val("[C+] Pass 2.50 Points");
			G2Total = 2.50;
		}
		else if (G2 >= 39.5 && G2 <= 44.49)
		{
			$('#GradeTwo').val("[C-] Pass 2.25 Points");
			G2Total = 2.25;
		}
		else if (G2 >= 29.5 && G2 <= 39.49)
		{
			$('#GradeTwo').val("[D] Fail 1.75 Points");
			G2Total = 1.75;
		}
		else if (G2 >= 0 && G2 <= 29.49)
		{
			$('#GradeTwo').val("[F] Fail 0.00 Points");
			G2Total = 0.00;
		}
		else
		{
			$('#GradeTwo').val("Invalid data at Grade Two");
		}

		
		//Third Grade Point
		if (G3 >= 69.50 && G3 <= 100)
		{
			$('#GradeThree').val("[A+] Excellent 4.00 Points");
			G3Total = 4.00;
		}
		else if (G3 >= 64.5 && G3 <= 69.49)
		{
			$('#GradeThree').val("[A-] Very Good 3.75 Points");
			G3Total = 3.75;
		}
		else if (G3 >= 59.5 && G3 <= 64.49)
		{
			$('#GradeThree').val("[B+] Good 3.25 Points");
			G3Total = 3.25;
		}
		else if (G3 >= 54.5 && G3 <= 59.49)
		{
			$('#GradeThree').val("[B] Credit 3.00 Points");
			G3Total = 3.00;
		}
		else if (G3 >= 49.5 && G3 <= 54.49)
		{
			$('#GradeThree').val("[B-] Credit 2.75 Points");
			G3Total = 2.75;
		}
		else if (G3 >= 44.5 && G3 <= 49.49)
		{
			$('#GradeThree').val("[C+] Pass 2.50 Points");
			G3Total = 2.50;
		}
		else if (G3 >= 39.5 && G3 <= 44.49)
		{
			$('#GradeThree').val("[C-] Pass 2.25 Points");
			G3Total = 2.25;
		}
		else if (G3 >= 29.5 && G3 <= 39.49)
		{
			$('#GradeThree').val("[D] Fail 1.75 Points");
			G3Total = 1.75;
		}
		else if (G3 >= 0 && G3 <= 29.49)
		{
			$('#GradeThree').val("[F] Fail 0.00 Points");
			G3Total = 0.00;
		}
		else
		{
			$('#GradeThree').val("Invalid data at Grade Three");
			
		}

		
		//Fourth Grade Point
		if (G4 >= 69.50 && G4 <= 100)
		{
			$('#GradeFour').val("[A+] Excellent 4.00 Points");
			G4Total = 4.00;
			
		}
		else if (G4 >= 64.5 && G4 <= 69.49)
		{
			$('#GradeFour').val("[A-] Very Good 3.75 Points");
			G4Total = 3.75;
		}
		else if (G4 >= 59.5 && G4 <= 64.49)
		{
			$('#GradeFour').val("[B+] Good 3.25 Points");
			G4Total = 3.25;
		}
		else if (G4 >= 54.5 && G4 <= 59.49)
		{
			$('#GradeFour').val("[B] Credit 3.00 Points");
			G4Total = 3.00;
		}
		else if (G4 >= 49.5 && G4 <= 54.49)
		{
			$('#GradeFour').val("[B-] Credit 2.75 Points");
			G4Total = 2.75;
		}
		else if (G4 >= 44.5 && G4 <= 49.49)
		{
			$('#GradeFour').val("[C+] Pass 2.50 Points");
			G4Total = 2.50;
		}
		else if (G4 >= 39.5 && G4 <= 44.49)
		{
			$('#GradeFour').val("[C-] Pass 2.25 Points");
			G4Total = 2.25;
		}
		else if (G4 >= 29.5 && G4 <= 39.49)
		{
			$('#GradeFour').val("[D] Fail 1.75 Points");
			G4Total = 1.75;
		}
		else if (G4 >= 0 && G4 <= 29.49)
		{
			$('#GradeFour').val("[F] Fail 0.00 Points");
			G4Total = 0.00;
		}
		else
		{
			$('#GradeFour').val("Invalid data at Grade Four");

		}

		
		//Fifth Grade Point
		if (G5 >= 69.50 && G5 <= 100)
		{
			$('#GradeFive').val("[A+] Excellent 4.00 Points");
			G5Total = 4.00;
		}
		else if (G5 >= 64.5 && G5 <= 69.49)
		{
			$('#GradeFive').val("[A-] Very Good 3.75 Points");
			G5Total = 3.75;
		}
		else if (G5 >= 59.5 && G5 <= 64.49)
		{
			$('#GradeFive').val("[B+] Good 3.25 Points");
			G5Total = 3.25;
		}
		else if (G5 >= 54.5 && G5 <= 59.49)
		{
			$('#GradeFive').val("[B] Credit 3.00 Points");
			G5Total = 3.00;
		}
		else if (G5 >= 49.5 && G5 <= 54.49)
		{
			$('#GradeFive').val("[B-] Credit 2.75 Points");
			G5Total = 2.75;
		}
		else if (G5 >= 44.5 && G5 <= 49.49)
		{
			$('#GradeFive').val("[C+] Pass 2.50 Points");
			G5Total = 2.50;
		}
		else if (G5 >= 39.5 && G5 <= 44.49)
		{
			$('#GradeFive').val("[C-] Pass 2.25 Points");
			G5Total = 2.25;
		}
		else if (G5 >= 29.5 && G5 <= 39.49)
		{
			$('#GradeFive').val("[D] Fail 1.75 Points");
			G5Total = 1.75;
		}
		else if (G5 >= 0 && G5 <= 29.49)
		{
			$('#GradeFive').val("[F] Fail 0.00 Points");
			G5Total = 0.00;
		}
		else
		{
			$('#GradeFive').val("Invalid data at Grade Five");
		}

		
		//Sixth Grade Point
		if (G6 >= 69.50 && G6 <= 100)
		{
			$('#GradeSix').val("[A+] Excellent 4.00 Points");
			G6Total = 4.00;
		}
		else if (G6 >= 64.5 && G6 <= 69.49)
		{
			$('#GradeSix').val("[A-] Very Good 3.75 Points");
			G6Total = 3.75;
		}
		else if (G6 >= 59.5 && G6 <= 64.49)
		{
			$('#GradeSix').val("[B+] Good 3.25 Points");
			G6Total = 3.25;
		}
		else if (G6 >= 54.5 && G6 <= 59.49)
		{
			$('#GradeSix').val("[B] Credit 3.00 Points");
			G6Total = 3.00;
		}
		else if (G6 >= 49.5 && G6 <= 54.49)
		{
			$('#GradeSix').val("[B-] Credit 2.75 Points");
			G6Total = 2.75;
		}
		else if (G6 >= 44.5 && G6 <= 49.49)
		{
			$('#GradeSix').val("[C+] Pass 2.50 Points");
			G6Total = 2.50;
		}
		else if (G6 >= 39.5 && G6 <= 44.49)
		{
			$('#GradeSix').val("[C-] Pass 2.25 Points");
			G6Total = 2.25;
		}
		else if (G6 >= 29.5 && G6 <= 39.49)
		{
			$('#GradeSix').val("[D] Fail 1.75 Points");
			G6Total = 1.75;
		}
		else if (G6 >= 0 && G6 <= 29.49)
		{
			$('#GradeSix').val("[F] Fail 0.00 Points");
			G6Total = 0.00;
		}
		else
		{
			$('#GradeSix').val("Invalid data at Grade Six");

		}

		

		
		GradeTotal = G1Total + G2Total + G3Total + G4Total + G5Total + G6Total;
		AGP = (GradeTotal / TotalModule); 
		
		//Average Grade Point Conversion
		
		var conAns = AGP.toString();
		
		if (conAns.length >= 5)
		{	
			var num = new Array("0", "1", "2", "3", "4");
			var num1 = new Array("5", "6", "7", "8", "9");
			
			var retrieve4 = conAns.substring(0, 4);
			var retrieve5 = conAns.substring(0, 5);
			
			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1);		//Decimal Place
			var char3 = retrieve4.charAt(2);

			var char4 = retrieve4.charAt(3);
			var char5 = retrieve5.charAt(4);			
			
			for (var i = 0; i <= 4; i++)
			{
				if (char5 == num1[i])
				{
					var numChar4 = parseInt(char4);
					numChar4 += 1;
										
					if (numChar4 <= 9)
					{	
						CommentAGP = ("AGP is " + char1 + char2 + char3 + numChar4 + " Point").toString();
						$('#AverageGP').val("AGP is " + char1 + char2 + char3 + numChar4 + " Point");
					}	
					else if(numChar4 > 9 && char3 <= 8)
					{	
						var numChar3 = parseInt(char3);
						numChar3 += 1;
						
						CommentAGP = ("AGP is " + char1 + char2 + numChar3).toString();
						$('#AverageGP').val("AGP is " + char1 + char2 + numChar3 + " Point");
					}
					else if(numChar4 > 9 && char3 >= 9 && char1 <= 4)
					{
						var numChar1 = parseInt(char1);
						numChar1 += 1;
						
						CommentAGP = ("AGP is " + numChar1 + char2 + "0" + " Point").toString();
						$('#AverageGP').val("AGP is " + numChar1 + char2 + "0" + " Point");
					}			
					else if(numChar4 > 9 && char3 >= 9 && char1 > 4)
					{
						
						$('#AverageGP').val("Data Error");
					}			
				}
				else if (char5 == num[i])
				{	
					CommentAGP = ("AGP is " + char1 + char2 + char3 + char4 + " Point").toString();
					$('#AverageGP').val("AGP is " + char1 + char2 + char3 + char4 + " Point");
				}
			}						
		}
		else if (conAns.length <= 4)
		{
			var retrieve4 = conAns.substring(0, 4);

			var char1 = retrieve4.charAt(0);
			var char2 = retrieve4.charAt(1); 		//Decimal place
			var char3 = retrieve4.charAt(2);
			var char4 = retrieve4.charAt(3);
			
			var newChar1 = parseInt(char1);
			var newChar3 = parseInt(char3);
			var newChar4 = parseInt(char4);
			

			if (isNaN(newChar4) && char2 == ".")
			{		
				CommentAGP = ("AGP is " + char1 + char2 + char3 + "0" + " Point").toString();	
				$('#AverageGP').val("AGP is " + char1 + char2 + char3 + "0" + " Point");
			}	
			else if (isNaN(newChar3) && isNaN(newChar4) && char2 == ".")
			{
				CommentAGP = ("AGP is " + char1 + char2 + "0" + "0" + " Point").toString();
				$('#AverageGP').val("AGP is " + char1 + char2 + "0" + "0" + " Point");
			}
			else if(newChar3 >= 0 && newChar4 >= 0 && char2 == ".")
			{
				CommentAGP = ("AGP is " + char1 + char2 + char3 + char4 + " Point").toString();
				$('#AverageGP').val("AGP is " + char1 + char2 + char3 + char4 + " Point");
			}
			else if (char2 != "." && char1 >= 0)
			{
				CommentAGP = ("AGP is " + char1 + "." + "0" + "0" + " Point").toString();
				$('#AverageGP').val("AGP is " + char1 + "." + "0" + "0" + " Point");
			}
			else if (isNaN(char1))
			{	
				
				$('#AverageGP').val("Data Error");
			}
		}
		
		//Ending of Average Grade Point Conversion
	
	});
	
	$("#exconclear").click(function() {
		$('#GradeOne').val("");
		
		$('#GradeTwo').val("");
		$('#GradeThree').val("");
		$('#GradeFour').val("");
		$('#GradeFive').val("");
		$('#GradeSix').val("");
		
		$('#InputBox1').val("");
		$('#InputBox2').val("");
		$('#InputBox3').val("");
		$('#InputBox4').val("");
		$('#InputBox5').val("");
		$('#InputBox6').val("");
		$('#AverageGP').val("");
		$('#Message').val("");
		
		$('#TG1').val("");
		$('#TG2').val("");
		$('#TG3').val("");
		$('#TG4').val("");
		$('#TG5').val("");
		$('#TG6').val("");
		
		$('#Ex1').val("");
		$('#Con1').val("");
		
		$('#Ex2').val("");
		$('#Con2').val("");
		
		$('#Ex3').val("");
		$('#Con3').val("");
		
		$('#Ex4').val("");
		$('#Con4').val("");
		
		$('#Ex5').val("");
		$('#Con5').val("");
		
		$('#Ex6').val("");
		$('#Con6').val("");
		
	});
		
});
