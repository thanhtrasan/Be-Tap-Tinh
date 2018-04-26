
			function nhap(name)
			{
				
				
				if(name==1)
				{
					if( isNaN(parseFloat( document.getElementById("num1").value) ) )
						document.getElementById("thongbao").innerHTML ="Nhập giá trị số vào ô thứ nhất";
				}
				else
				{
					if( isNaN(parseFloat( document.getElementById("num2").value) ) )
						document.getElementById("thongbao").innerHTML ="Nhập giá trị số vào ô thứ hai";
				}
				
			}
			function tinh() 
			{
				var x = document.getElementById("num1").value;
				var y = document.getElementById("num2").value;
				
				if(x=="")
				{
					
						document.getElementById("thongbao").innerHTML ="chưa nhập số thứ nhất ";
				}
				if(y=="")
				{
					
						document.getElementById("thongbao").innerHTML =document.getElementById("thongbao").innerHTML +"chưa nhập số thứ hai ";
				}
				if(x!=""&&y!="")
				{
					x=parseFloat( document.getElementById("num1").value);
					y=parseFloat( document.getElementById("num2").value);
					if(x==NaN)
				{
					document.getElementById("thongbao").innerHTML ="Số thứ nhất không phải là số ";
				};
				if(y==NaN)
				{
					document.getElementById("thongbao").innerHTML ="Số thứ hai không phải là số ";
				};
					if(document.getElementById('cong').checked == false && document.getElementById('tru').checked == false && document.getElementById('nhan').checked == false && document.getElementById('chia').checked == false)
					{
						document.getElementById("thongbao").innerHTML ="chưa chon phep toan";
					}
					else
					{
						if( document.getElementById("cong").checked)
						{
							document.getElementById("kq").value =x+y;
							document.getElementById("thongbao").innerHTML ="";
						}
						else if( document.getElementById("tru").checked)
							{
								document.getElementById("kq").value =x-y;
								document.getElementById("thongbao").innerHTML ="";
							}
							else if( document.getElementById("nhan").checked)
							{
								document.getElementById("kq").value =x*y;
								document.getElementById("thongbao").innerHTML ="";
							}
							else if( document.getElementById("chia").checked)
							{
								if(y!=0)
								{
									document.getElementById("kq").value =x/y;
								
									document.getElementById("thongbao").innerHTML ="";
								}
								else
									document.getElementById("thongbao").innerHTML ="khong the chia cho 0";
							}
					}
				}

  			}


	