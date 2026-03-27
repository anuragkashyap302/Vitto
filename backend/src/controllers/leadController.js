import { createLead, getLeadById } from '../services/leadService.js';

export async function createLeadController(req, res, next) {
  try {
    const payload = req.body;
    const lead = await createLead(payload);
    return res.status(201).json({
      message: 'Lead created',
      data: lead,
    });
  } catch (error) {
    return next(error);
  }
}

export async function getLeadByIdController(req, res, next) {
  try {
    const { id } = req.params;
    const lead = await getLeadById(id);

    if (!lead) {
      return res.status(404).json({ message: 'Lead not found' });
    }

    return res.status(200).json({ data: lead });
  } catch (error) {
    return next(error);
  }
}
