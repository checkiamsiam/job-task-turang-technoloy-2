import { Checkbox,  FormControlLabel, FormGroup, Radio, RadioGroup } from "@mui/material";
import React from "react";

const DetailForm = () => {
  return (
    <div className="mt-8">
      <form>
        <div>
          <label className="text-2xl">
            If you have problems with pain/aches, stiffness, weakness of functional problems, Describe this/these below. ( List the symptoms in
            descending order with the most troublesome first )
          </label>
          <textarea name="problem-description" className="h-20 w-full border-2 mt-5 rounded-md p-2"></textarea>
        </div>
        <div className="flex items-center mt-5">
          <label className="text-2xl w-1/2">Have You been diagnosed with this problem?</label>
          <div className="w-1/2">
            <RadioGroup className="flex gap-10" row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="not relevant" control={<Radio />} label="not relevant" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <label className="text-2xl w-1/2">Did the problem start after a physical trauma?</label>
          <div className="w-1/2">
            <RadioGroup className="flex gap-10" row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="not relevant" control={<Radio />} label="not relevant" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
          </div>
        </div>
        <div className="flex items-center mt-5">
          <label className="text-2xl w-1/2">Did the problem start after a mental trauma?</label>
          <div className="w-1/2">
            <RadioGroup className="flex gap-10" row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="not relevant" control={<Radio />} label="not relevant" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
          </div>
        </div>
        <div className="mt-7">
          <label className="text-2xl">Did the problem start after a mental trauma?</label>
          <div className="w-full">
            <RadioGroup className="flex gap-20 mt-3" row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="not relevant" control={<Radio />} label="not relevant" />
              <FormControlLabel value="Daily" control={<Radio />} label="Daily" />
              <FormControlLabel value="Several times/week" control={<Radio />} label="Several times/week" />
              <FormControlLabel value="A few times/month" control={<Radio />} label="A few times/month" />
              <FormControlLabel value="A few times/year" control={<Radio />} label="A few times/year" />
            </RadioGroup>
          </div>
        </div>
        <div className="mt-7">
          <label className="text-2xl">When do you experience the problem?</label>
          <FormGroup colum>
            <FormControlLabel control={<Checkbox />} label="Not Relevant" />
            <FormControlLabel control={<Checkbox />} label="when laying down" />
            <FormControlLabel control={<Checkbox />} label="when sitting" />
            <FormControlLabel control={<Checkbox />} label="under standing" />
            <FormControlLabel control={<Checkbox />} label="In walking" />
          </FormGroup>
        </div>
        <div className="mt-7">
          <label className="text-2xl">How intense is the experience of the problem on average on a 0-10 scale?</label>
          <RadioGroup className="flex mt-3" row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value={1} control={<Radio />} label="1" labelPlacement="top" />
            <FormControlLabel value={2} control={<Radio />} label="2" labelPlacement="top" />
            <FormControlLabel value={3} control={<Radio />} label="3" labelPlacement="top" />
            <FormControlLabel value={4} control={<Radio />} label="4" labelPlacement="top" />
            <FormControlLabel value={5} control={<Radio />} label="5" labelPlacement="top" />
            <FormControlLabel value={6} control={<Radio />} label="6" labelPlacement="top" />
            <FormControlLabel value={7} control={<Radio />} label="7" labelPlacement="top" />
            <FormControlLabel value={8} control={<Radio />} label="8" labelPlacement="top" />
            <FormControlLabel value={9} control={<Radio />} label="9" labelPlacement="top" />
            <FormControlLabel value={10} control={<Radio />} label="10" labelPlacement="top" />
          </RadioGroup>
        </div>
        <div className="mt-5">
          
        </div>
      </form>
    </div>
  );
};

export default DetailForm;
