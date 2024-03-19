import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentsMarks = [
        {
            "id": 1,
            "name": "Alice",
            "math_marks": 85,
            "physics_marks": 78,
            "chemistry_marks": 92
        },
        {
            "id": 2,
            "name": "Bob",
            "math_marks": 78,
            "physics_marks": 82,
            "chemistry_marks": 85
        },
        {
            "id": 3,
            "name": "Charlie",
            "math_marks": 92,
            "physics_marks": 88,
            "chemistry_marks": 91
        },
        {
            "id": 4,
            "name": "David",
            "math_marks": 68,
            "physics_marks": 72,
            "chemistry_marks": 65
        },
        {
            "id": 5,
            "name": "Emma",
            "math_marks": 90,
            "physics_marks": 85,
            "chemistry_marks": 89
        },
        {
            "id": 6,
            "name": "Frank",
            "math_marks": 73,
            "physics_marks": 68,
            "chemistry_marks": 75
        },
        {
            "id": 7,
            "name": "Grace",
            "math_marks": 81,
            "physics_marks": 77,
            "chemistry_marks": 83
        },
        {
            "id": 8,
            "name": "Hannah",
            "math_marks": 87,
            "physics_marks": 91,
            "chemistry_marks": 88
        },
        {
            "id": 9,
            "name": "Ian",
            "math_marks": 79,
            "physics_marks": 84,
            "chemistry_marks": 80
        },
        {
            "id": 10,
            "name": "Jack",
            "math_marks": 95,
            "physics_marks": 93,
            "chemistry_marks": 97
        }
    ]
    
    return (
        <div>
            <hr />
            <h1 className="my-6 text-3xl">Student marks line chart</h1>
            <LChart width={1000} height={400} data={studentsMarks}>
                <XAxis dataKey='name'></XAxis>
                <YAxis></YAxis>
                <Line dataKey={'math_marks'} stroke='yellow'></Line>
                <Line dataKey={'physics_marks'} stroke='red'></Line>
                <Line dataKey={'chemistry_marks'}></Line>
            </LChart>
        </div>
    );
};

export default LineChart;