import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
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
          <FormControl className="w-1/2">
            <RadioGroup className="flex gap-10" row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="not relevant" control={<Radio />} label="not relevant" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="flex items-center mt-5">
          <label className="text-2xl w-1/2">Did the problem start after a physical trauma?</label>
          <FormControl className="w-1/2">
            <RadioGroup className="flex gap-10" row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
              <FormControlLabel value="not relevant" control={<Radio />} label="not relevant" />
              <FormControlLabel value="yes" control={<Radio />} label="yes" />
              <FormControlLabel value="no" control={<Radio />} label="no" />
            </RadioGroup>
          </FormControl>
        </div>
      </form>
    </div>
  );
};

export default DetailForm;
