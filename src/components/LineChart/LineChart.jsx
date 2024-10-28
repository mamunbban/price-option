import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';
const LineChart = () => {
    const mathMarks =[
        { id: 1, name: "Alice Johnson", math: 85, physics: 78, chemistry: 10 },
        { id: 2, name: "Bob Smith",     math: 78, physics: 82, chemistry: 75  },
        { id: 3, name: "Carol Lee",     math: 90, physics: 5, chemistry: 88 },
        { id: 4, name: "David Kim",     math: 72, physics: 70, chemistry: 68  },
        { id: 5, name: "Emma Brown",    math: 88, physics: 87, chemistry: 84  },
        { id: 6, name: "Frank Wilson",  math: 65, physics: 60, chemistry: 70  },
        { id: 7, name: "Grace Clark",   math: 92, physics: 88, chemistry: 91 },
        { id: 8, name: "Hannah Davis",  math: 70, physics: 75, chemistry: 73  },
        { id: 9, name: "Ian Martinez",  math: 81, physics: 80, chemistry: 79  },
        { id: 10,name: "Julia Thomas",  math: 10, physics: 82, chemistry: 10  }
      ]
      
      
    return (
        <div>

            <LChart width={1000} height={400} data={mathMarks}>
                <XAxis dataKey="name"></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='green'></Line>
                <Line dataKey='chemistry' stroke='black'></Line>
            </LChart>
            
        </div>
    );
};

export default LineChart;