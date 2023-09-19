const express = require('express');
const router = express.Router();

router.post(
    "/",
    async (req, res) => {
        const data = Array.from(req.body.data);
        console.log(data, typeof(data));
        try {
            const email = "ankitkumar.patel2020@vitstudent.ac.in";
            const dob = "15102001";
            const roll_no = "20BLC1105";
            const user_id = "ankit_kumar_patel"+dob;
            const nums = [];
            const alphabets = [];
            let highest_alphabet = "";
            for(const i in data) {
                if((data[i] >= "A" && data[i] <= "Z")||(data[i] >= "a" && data[i] <= "z")) {
                    alphabets.push(data[i]);
                } else 
                    nums.push(data[i]);
            }
            
            for(let i=0;i<alphabets.length;i++) {
                if(alphabets[i] > highest_alphabet)
                    highest_alphabet = alphabets[i];
            }

            const highest_alphabets = [];
            if(highest_alphabet != "") 
                highest_alphabets.push(highest_alphabet)

            return res.status(200).json({
                is_success: true,
                user_id: user_id,
                email: email,
                roll_no: roll_no,
                numbers: nums,
                alphabets: alphabets,
                highest_alphabet: highest_alphabets
            })
        } catch(err) {
            console.log(err);
            return res.status(500).json({
                err: "something went wrong"
            })
        }
    }
)

router.get(
    '/',
    async(req,res) => {
        return res.status(200).json({
            operation_code: 1
        })
    }
)

module.exports = router;