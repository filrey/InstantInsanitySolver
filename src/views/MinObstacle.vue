<template>
    <div>
        <h1>Minimum Obstacle</h1>

        <Min-Table :left="this.leftIn1" :middle="this.middleIn1" :right="this.rightIn1" :header="'Puzzle 1'" ></Min-Table>
        <Min-Table :left="this.leftIn2" :middle="this.middleIn2" :right="this.rightIn2" :header="'Puzzle 2'" ></Min-Table>
        <Min-Table :left="this.leftIn3" :middle="this.middleIn3" :right="this.rightIn3" :header="'Puzzle 3'" ></Min-Table>
        <Min-Table :left="this.leftIn4" :middle="this.middleIn4" :right="this.rightIn4" :header="'Puzzle 4'" ></Min-Table>

    </div>
</template>
<script>
import MinTable from '@/views/MinTable.vue'

export default {
    components:{
        MinTable
    },
    data(){
        return{
            size:27,
            puzzle1:[],
            puzzle2:[],
            puzzle3:[],
            puzzle4:[],

            p1Rows:[],
            p2Rows:[],
            p3Rows:[],
            p4Rows:[],

            leftRows1:[],
            leftRows2:[],
            leftRows3:[],
            leftRows4:[],

            leftIn1:'',
            leftIn2:'',
            leftIn3:'',
            leftIn4:'',


            middleRows1:[],
            middleRows2:[],
            middleRows3:[],
            middleRows4:[],

            middleIn1:'',
            middleIn2:'',
            middleIn3:'',
            middleIn4:'',

            rightRows1:[],
            rightRows2:[],
            rightRows3:[],
            rightRows4:[],

            rightIn1:'',
            rightIn2:'',
            rightIn3:'',
            rightIn4:'',            

            colors: ["lavender","red","blue","green","yellow","cyan","orange","purple","fuchsia",
            "GreenYellow","Brown","Teal","Gold","White","Gray","DarkSlateGray","Plum",
            "Indigo","SteelBlue","Linen","Silver","OliveDrab","Crimson","DeepPink","DeepSkyBlue",
            "SlateBlue","Khaki","Tomato","Lime","Aquamarine","DarkKhaki",],
        }
    },
    created() {
        this.populateColors()
    },
    methods:{
        turnToRow(puzzle,row,left,middle,right,value){
            var result=[]
            var leftRow=[]
            var middleRow=[]
            var rightRow=[]

            var counter = 0

            for (let index = value-6; index < value; index++) {
                counter++
                result.push(puzzle[index])   
                
                if (counter == 1 || counter == 2) {
                    leftRow.push(puzzle[index])
                }
                if (counter == 2 || counter == 3) {
                    middleRow.push(puzzle[index])
                }                                
                if (counter == 4 || counter == 5) {
                    rightRow.push(puzzle[index])
                }
            }
            row.push(result)

            left.push(leftRow)
            middle.push(middleRow)
            right.push(rightRow)

        },
        populateColors(){
            var totalColors = this.size *6
            var leftRow = []
            var middleRow = []
            var rightRow = []


            for (let index = 1; index <= totalColors; index++) {
                this.puzzle1.push(this.colorGen1(index))
                this.puzzle2.push(this.colorGen2(index))
                this.puzzle3.push(this.colorGen3(index))
                this.puzzle4.push(this.colorGen4(index))     
                
                if (index%6 == 0) {
                    this.turnToRow(this.puzzle1,this.p1Rows,this.leftRows1,this.middleRows1,this.rightRows1,index)
                    this.turnToRow(this.puzzle2,this.p2Rows,this.leftRows2,this.middleRows2,this.rightRows2,index)
                    this.turnToRow(this.puzzle3,this.p3Rows,this.leftRows3,this.middleRows3,this.rightRows3,index)
                    this.turnToRow(this.puzzle4,this.p4Rows,this.leftRows4,this.middleRows4,this.rightRows4,index)


                }
            }
            this.leftIn1 = this.leftRows1.join("-")
            this.leftIn2 = this.leftRows2.join("-")
            this.leftIn3 = this.leftRows3.join("-")
            this.leftIn4 = this.leftRows4.join("-")

            this.middleIn1 = this.middleRows1.join("-")
            this.middleIn2 = this.middleRows2.join("-")
            this.middleIn3 = this.middleRows3.join("-")
            this.middleIn4 = this.middleRows4.join("-")

            this.rightIn1 = this.rightRows1.join("-")
            this.rightIn2 = this.rightRows2.join("-")
            this.rightIn3 = this.rightRows3.join("-")
            this.rightIn4 = this.rightRows4.join("-")            

        },
        colorGen1(input){
            return 1+ (Math.floor(input*Math.PI)%27 )
        },
        colorGen2(input){
            return 1+ (Math.floor(input*Math.E)%27 )
        },
        colorGen3(input){
            return 1+ (Math.floor(input*Math.sqrt(3))%27 )
        },
        colorGen4(input){
            return 1+ (Math.floor(input*Math.sqrt(5))%27 )
        },
        weaveArray(array, weaveValue) {
        const {length} = array;
        return array.reduce((result, value, i) => {
            if(i < length - 1) {
            result.push(value, weaveValue);
            } else {
            result.push(value);
            }
            return result;
        }, []);
        }        
    }
}
</script>