

function Selection_sort()
{
    
    document.getElementById("Time_Worst").innerText="O(N^2)";
    document.getElementById("Time_Average").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N^2)";


    document.getElementById("Space_Worst").innerText="O(1)";

    c_delay=0;

    for(var i=0;i<array_size-1;i++)
    {
        div_update(divs[i],div_sizes[i],"lightred");

        index_min=i;

        for(var j=i+1;j<array_size;j++)
        {
            div_update(divs[j],div_sizes[j],"#CC8899");

            if(div_sizes[j]<div_sizes[index_min])
            {
                if(index_min!=i)
                {
                    div_update(divs[index_min],div_sizes[index_min],"lightblue");
                }
                index_min=j;
                div_update(divs[index_min],div_sizes[index_min],"lightred");
            }
            else
            {
                div_update(divs[j],div_sizes[j],"lightblue");
            }
        }
        
        if(index_min!=i)
        {
            var temp=div_sizes[index_min];
            div_sizes[index_min]=div_sizes[i];
            div_sizes[i]=temp;

            div_update(divs[index_min],div_sizes[index_min],"lightred");
            div_update(divs[i],div_sizes[i],"lightred");
            div_update(divs[index_min],div_sizes[index_min],"lightblue");
        }
        div_update(divs[i],div_sizes[i],"lightgreen");
    }
    div_update(divs[i],div_sizes[i],"lightgreen");

    enable_buttons();
}

